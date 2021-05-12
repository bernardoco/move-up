import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import EventsDAO from "./dao/eventsDAO.js"
dotenv.config()

const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

console.log("Connecting...")

MongoClient.connect(
    process.env.EVENTS_DB_URI, { useNewUrlParser: true }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await EventsDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})