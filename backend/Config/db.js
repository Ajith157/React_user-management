const mongoose = require("mongoose");

const connectDB = async () => {
  try {
   
    const conn = await mongoose.connect("mongodb+srv://ajithpr9999:Ajith123@cluster0.rxaumrf.mongodb.net/?retryWrites=true&w=majority");
    console.log(`MongoDB Connected to ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;




