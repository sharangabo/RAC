const express = require("express");
const userRoute = express.Router();
const registerUser = require("../controllers/userController")

userRoute.post("/auth/register", registerUser);
module.exports = userRoute;
