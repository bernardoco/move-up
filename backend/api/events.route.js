import express from "express"
import EventsController from "./events.controller.js"

const router = express.Router()

router.route("/").get(EventsController.apiGetEvents)

router
    .route("/event")
    .post(EventsController.apiAddEvent)
    .delete(EventsController.apiDeleteEvent)
    .put(EventsController.apiIncrementPlayers)

export default router