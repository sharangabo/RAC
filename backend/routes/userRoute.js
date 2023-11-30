const express = require("express");
const userRoute = express.Router();
const {registerUser,userLogin} = require("../controllers/userController")

userRoute.post("/auth/register", registerUser);
userRoute.post("/auth/login", userLogin);
module.exports = userRoute;
