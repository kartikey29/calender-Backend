const Event = require("../model/event.model");

const insertEvent = async (req, res) => {
  try {
    const { title, date, startTime, endTime } = req.body;
    const insertedEvent = new Event({
      userId: req.user._id,
      startTime,
      endTime,
      date,
      title,
    });
    await insertedEvent.save();
    return res.status(200).send({ insertedEvent });
  } catch (error) {
    return res
      .status(400)
      .send({ error: "meeting already scheduled in this date and time" });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const data = await Event.find({ userId: req.user._id });
    return res.status(200).send(data);
  } catch (e) {
    return res.status(400).send({ error: e });
  }
};

const upcomingEvents = async (req, res) => {
  try {
    const { reqDate } = req.params;
    const data = await Event.find({
      startTime: { $gte: reqDate },
      userId: req.user._id,
    }).sort({ date: 1 });
    console.log(data);
    return res.send(data);
  } catch (e) {
    return res.status(400).send({ error: e });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const del = await Event.findOneAndDelete({ userId: req.user._id, _id: id });
    return res.send(del);
  } catch (e) {
    return res.status(400).send({ error: e });
  }
};

const editEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await Event.findOneAndUpdate(
      {
        userId: req.user._id,
        _id: id,
      },
      req.body,
      { new: true }
    );
    return res.send(update);
  } catch (e) {
    return res.status(400).send({ error: e });
  }
};

module.exports = {
  insertEvent,
  upcomingEvents,
  deleteEvent,
  editEvent,
  getAllEvents,
};
