const express = require("express");
const cors = require("cors");
const dbConnection = require("./dbConnection");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { fetchUser } = require("./controllers/LoginController");
const {
  fetchCompanies,
  fetchCompany,
  createCompany,
  editCompany,
  deleteCompany,
} = require("./controllers/CompanyController");

const {
  fetchEducation,
  fetchEducations,
  createEducation,
  editEducation,
  deleteEducation,
} = require("./controllers/EducationController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(cors());

PORT = 8050;
IP = "192.168.0.51";

dbConnection();

//login
app.post("/login", fetchUser);

//company
app.get("/company", fetchCompanies);
app.get("/company/:id", fetchCompany);
app.post("/company", upload.single("logo"), createCompany);
app.put("/company/:id", editCompany);
app.delete("/company/:id", deleteCompany);

//Education

app.get("/education", fetchEducations);
app.get("/education/:id", fetchEducation);
app.post("/education", createEducation);
app.put("/education/:id", editEducation);
app.delete("/education/:id", deleteEducation);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = app.listen(PORT, IP, () =>
  console.log(`Server Connected to port ${PORT}`)
);
// Handling Error
process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});
