const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
});
eventSchema.index({ startTime: 1, endTime: 1, userId: 1 }, { unique: true });

const eventModel = mongoose.model("Event", eventSchema);

module.exports = eventModel;
