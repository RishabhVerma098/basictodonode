const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`Database Connected to ${conn.connection.host}`.cyan.bold);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
