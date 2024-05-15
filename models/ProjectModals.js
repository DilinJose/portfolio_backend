const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  desc: String,
  image: String,
  link: String,
});

const project = mongoose.model("project", projectSchema);

module.exports = project;
