const userRoute = require("express").Router();
const { login, sigup, getUser } = require("../controller/user.controller");
const { verifyToken } = require("../middleware/jwt");

userRoute.get("/", verifyToken, getUser);
userRoute.post("/login", login);
userRoute.post("/signup", sigup);

module.exports = userRoute;
