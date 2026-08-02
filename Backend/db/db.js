const mongoose = require("mongoose");

async function connectDB() {
  // await mongoose.connect("mongodb+srv://admin:admin824@cluster0.3yp2vbz.mongodb.net/halley");
  await mongoose.connect(process.env.MONGO_URI)
  

  console.log("Connected to db");
}

module.exports = connectDB;


