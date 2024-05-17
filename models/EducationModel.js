const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  collageName: String,
  degree: String,
  startData: String,
  endData: String,
  location: String,
});
const education = mongoose.model("education", educationSchema);
module.exports = education;
