import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID
let events

export default class EventsDAO {
    static async injectDB(conn) {
        if (events) {
            return
        }
        try {
            events = await conn.db(process.env.EVENTS_NS).collection("Events")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in eventsDAO: ${e}`,
            )
        }
    }

    static async addEvent(sport, local, date, max_players) {
        try {
            const eventDocument = { sport: sport,
                local: local,
                start_date: date,
                curr_players: 0,
                max_players: max_players,
                eventId: ObjectId,
            }
            return await events.insertOne(eventDocument)
        } catch (e) {
            console.error(`Unable to add event, ${e}`)
            return { error: e }
        }
    }

    static async getEvents({
        filters = null,
        page = 0,
        eventsPerPage = 20,
    } = {}) {
        let query
        if (filters) {
            if ("sport" in filters) {
                query = {"sport": { $eq: filters["sport"] } }
            } else if ("local" in filters) {
                query = {"local": { $eq: filters["local"] } }
            } else if ("curr_players" in filters) {
                query = {"curr_players": { $eq: filters["curr_players"] } }
            } else if ("max_players" in filters) {
                query = {"max_players": { $eq: filters["max_players"] } }
            }
        }

        let cursor

        try {
            cursor = await events
                .find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { eventsLists: [], totalNumEvents: 0 }
        }

        const displayCursor = cursor.limit(eventsPerPage).skip(eventsPerPage * page)
    
        try {
            const eventsLists = await displayCursor.toArray()
            const totalNumEvents = await events.countDocuments(query)

            return { eventsLists, totalNumEvents }
        } catch (e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents, ${e}`,
            )
            return { eventsLists: [], totalNumEvents: 0 }
        }
    }
}