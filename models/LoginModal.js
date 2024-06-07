const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: String,
    pswd: String,
});

const user = mongoose.model("user", UserSchema);
module.exports = user;
