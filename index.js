const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const cors = require("cors");
app.use(express.json());
app.use(cors());

require("dotenv").config({ path: "./config.env" });

const connection = require("./src/db/connection");
connection();
const userRoute = require("./src/route/user.route");
const eventRoute = require("./src/route/event.route");
app.use("/user", userRoute);
app.use("/event", eventRoute);
app.listen(process.env.port, () => {
  console.log("listening on 5000");
});
