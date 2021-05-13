import EventsDAO from "../dao/eventsDAO.js"

export default class EventsController {
    static async apiGetEvents (req, res, next) {
        const eventsPerPage = req.query.eventsPerPage ? parseInt(req.query.eventsPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0
        
        let filters = {}
        if (req.query.sport) {
            filters.sport = req.query.sport
        } else if (req.query.local) {
            filters.local = req.query.local
        } else if (req.query.curr_players) {
            filters.curr_players = req.query.curr_players
        } else if (req.query.max_players) {
            filters.max_players = req.query.max_players
        }

        const { eventsLists, totalNumEvents } = await EventsDAO.getEvents({
            filters,
            page,
            eventsPerPage,
        })

        let response = {
            events: eventsLists,
            page: page,
            filters: filters,
            entries_per_page: eventsPerPage,
            total_results: totalNumEvents,
        }
        res.json(response)
    }

    static async apiAddEvent (req, res, next) {
        try {
            const sport = req.body.sport
            const local = req.body.local
            const date = req.body.date
            const max_players = req.body.max_players

            const EventResponse = await EventsDAO.addEvent(
                sport,
                local,
                date,
                max_players
            )
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiDeleteEvent(req, res, next) {
        try {
            const _id = req.body._id
            const EventResponse = await EventsDAO.deleteEvent(
                _id)
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

}