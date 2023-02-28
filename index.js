const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const cors = require("cors");
app.use(express.json());
app.use(cors());
require("dotenv").config({ path: "./config.env" });

app.listen("5000", () => {
  console.log("listening on 5000");
});
