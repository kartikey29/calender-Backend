const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.mongoDBURL);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
