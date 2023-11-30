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

// ===== USER LOGIN =====
const userLogin = async (req, res) => {
    const { email, password } = req.body;
    //check if user exists
    const userFound = await User.findOne({ email });
    if (userFound ) {
        // compare the entered password with saved one in db
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch){
            return  res.status(400).json({
                success: false,
                message: "Invalid credentials",
            })
        }
        const token = await jwt.sign({id:userFound?._id},process.env.JWT_SECRET, {expiresIn:"2d"})
        console.log("user Login", userFound)
        res.status(200).json({
            _id: userFound?._id,
            username: userFound?.username,
            email: userFound?.email,
            token
          });
      //Check if password is match
      
    } else {
      res.status(401);
      throw new Error("Invalid Login Credentials");
    }
  };
  


module.exports = {registerUser,userLogin}