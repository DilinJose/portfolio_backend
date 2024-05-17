const { findById } = require("../models/CompanyModal");
const Education = require("../models/EducationModel");
const fetchEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const education = await Education.findById(id);
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch education details" });
  }
};

const fetchEducations = async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch education details" });
  }
};

const createEducation = async (req, res) => {
  try {
    const { collageName, degree, startData, endData, location } = req.body;
    const education = await Education.create({
      collageName,
      degree,
      startData,
      endData,
      location,
    });
    res.json(education);
  } catch (error) {
    res.status(500).json(error, "Error Creating Education Details");
  }
};

const editEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const { collageName, degree, startData, endData, location } = req.body;
    await Education.findByIdAndUpdate(id, {
      collageName,
      degree,
      startData,
      endData,
      location,
    });
    const education = await Education.findById(id);
    res.json(education);
  } catch (error) {
    res.status(500).json(error, "Error Editing Education Details");
  }
};

const deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const education = await Education.findByIdAndDelete({ _id: id });
    res.json(education);
  } catch (error) {
    res.status(500).json(error, "Error deleting education details");
  }
};

module.exports = {
  fetchEducation,
  fetchEducations,
  createEducation,
  editEducation,
  deleteEducation,
};
