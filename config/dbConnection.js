const mongoose = require("mongoose");
require("dotenv").config();

// Export a function to establish MongoDB connection
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB Database Connected!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
