const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};
module.exports =  dbConnect;
