const express = require("express");
const cors = require("cors");
const dbConnection = require("./dbConnection");
// const Project = require("./models/ProjectModals");
const Project = require("./models/ProjectModals");
const app = express();
app.use(express.json());
app.use(cors());
PORT = 8050;
const a = dbConnection();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/project", async (req, res) => {
  const project = await Project.find();
  console.log("project", project);
  res.json({ project });
});

app.get("/project/:id", async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  res.json({ project });
});
app.post("/project", async (req, res) => {
  const { title, desc, image, link } = req.body;

  const project = await Project.create({
    title,
    desc,
    image,
    link,
  });
  res.json({ project });
});

app.delete("/project/:id", async (req, res) => {
  const { id } = req.params;
  const project = await Project.findByIdAndDelete(id);
  console.log("project :>> ", project);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
