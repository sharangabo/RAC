const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect")
const app = express();
dotenv.config();
const userRoute = require("./routes/userRoute")
app.use(express.json())
app.use(cors());
// === Connect to dataabase 
dbConnect()
app.get("/", (req, res)=> {
    res.json({
        data: "Welcome to RCA apis"
    })
})
app.use("/api/user", userRoute)


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {console.log(`App listen on port ${PORT}`)})