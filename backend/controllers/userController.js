const mongoose = require("mongoose");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ===== Register user ====
const registerUser = async (req, res) => {
    try {
        const hashed = await bcrypt.hash(req?.body?.password,10);
        const user = await User.create({
         username:req?.body?.userName,
         email:req?.body?.email,
         phoneNumber:req?.body?.phoneNumber,
         password:hashed
        })
        if(!user) {
            return res.status(400).json({
                success:false,
                message:"Error while saving user to DB"
            })
        };
        return res.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
     throw new Error(error)
    }
}


module.exports = registerUser