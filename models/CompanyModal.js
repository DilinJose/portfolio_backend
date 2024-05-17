const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  desc: String,
  image: String,
  link: String,
});

const companySchema = new mongoose.Schema({
  logo: String,
  compName: String,
  startData: String,
  endData: String,
  location: String,
  designation: String,
  projects: [projectSchema],
});

const company = mongoose.model("company", companySchema);
module.exports = company;
