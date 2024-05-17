const project = require("../models/ProjectModals");

  
const fetchProject = async (req, res) => {
    const { id } = req.params;
    const project = await Project.findById(id);
    res.json({ project });
  };

  app.get("/project", async (req, res) => {
    const project = await Project.find();
    console.log("project", project);
    res.json({ project });
  });
  
  app.post("/project", upload.single("image"), async (req, res) => {
    const { title, desc, link } = req.body;
    const image = req.file.filename;
    try {
      const project = await Project.create({
        title,
        desc,
        image,
        link,
      });
      res.json({ project });
    } catch (err) {
      res.status(500).json({ error: "Failed to create project" });
    }
  });
  
  app.put("/project/:id", upload.single("image"), async (req, res) => {
    const { id } = req.params;
    const { title, desc, link } = req.body;
    const image = req.file.filename;
    try {
      const project = await Project.findByIdAndUpdate(
        id,
        {
          title,
          desc,
          image,
          link,
        },
        { new: true }
      );
      res.json({ project });
    } catch (err) {
      res.status(500).json({ error: "Failed to update project" });
    }
  });
  
  app.delete("/project/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const project = await Project.findById(id);
  
      const imagePath = path.join(__dirname, "uploads", project.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
  
      await Project.findByIdAndDelete(id);
  
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to delete project" });
    }
  });