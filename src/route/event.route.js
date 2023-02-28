const eventRoute = require("express").Router();
const {
  insertEvent,
  upcomingEvents,
  deleteEvent,
  editEvent,
  getAllEvents,
} = require("../controller/event.controller");
const { verifyToken } = require("../middleware/jwt");

eventRoute.get("/", verifyToken, getAllEvents);
eventRoute.delete("/:id", verifyToken, deleteEvent);
eventRoute.post("/", verifyToken, insertEvent);
eventRoute.get("/getUpcoming/:reqDate", verifyToken, upcomingEvents);
eventRoute.patch("/:id", verifyToken, editEvent);
// eventRoute.post("/login", login);
// eventRoute.post("/signup", sigup);

module.exports = eventRoute;
