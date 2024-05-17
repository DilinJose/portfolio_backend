const Company = require("../models/CompanyModal");

const fetchCompanies = async (req, res) => {
  try {
    const company = await Company.find();
    res.status(200).json({ company });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch company details" });
  }
};

const fetchCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);
    res.status(200).json({ company });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch company details" });
  }
};

const createCompany = async (req, res) => {
  try {
    const logo = req.file.filename;
    const {
      compName,
      startData,
      endData,
      location,
      designation,
      projects,
    } = req.body;
    const company = await Company.create({
      logo,
      compName,
      startData,
      endData,
      location,
      designation,
      projects,
    });
    res.json({ company });
  } catch (error) {
    res.json(error, "Failed to insert company details");
  }
};

const editCompany = async (req, res) => {
  console.log("req", req);
  try {
    const { id } = req.params;
    const {
      logo,
      compName,
      startData,
      endData,
      location,
      designation,
      projects,
    } = req.body;
    await Company.findByIdAndUpdate(id, {
      logo,
      compName,
      startData,
      endData,
      location,
      designation,
      projects,
    });
    const company = await Company.findById({ _id: id });
    res.status(200).json({ company });
  } catch (error) {
    res.status(500).json({ error: "Failed to edit company details" });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.deleteOne({ _id: id });
    res.status(200).json({ company });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete Company details" });
  }
};

module.exports = {
  fetchCompanies,
  fetchCompany,
  createCompany,
  editCompany,
  deleteCompany,
};
