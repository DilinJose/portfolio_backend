const mongoose = require("mongoose");

async function dbConnection() {
  try {
    const response = await mongoose.connect(
      // "mongodb+srv://dilinjose34:dilinjose34@cluster1.am21mxt.mongodb.net/login_data?retryWrites=true&w=majority&appName=Cluster1"
      "mongodb+srv://dilinjose34:dilinjose34@cluster1.am21mxt.mongodb.net/login_data?retryWrites=true&w=majority&appName=Cluster1"
    );
    console.log("DataBase Connected");
  } catch (error) {
    console.error("Failed connecting to database", error);
  }
}

module.exports = dbConnection;
