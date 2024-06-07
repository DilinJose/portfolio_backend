const User = require("../models/LoginModal");

const fetchUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const { email:userName, pswd } = user;
    if (user) {
      const result = pswd === password;
      if (result) {
        res.status(200).json({user});
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "Email doesn't match" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Login details" });
  }
};

module.exports = { fetchUser };

