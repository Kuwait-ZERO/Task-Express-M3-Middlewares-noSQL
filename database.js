const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://hussein2000q8:project1@cluster0.usn3q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
