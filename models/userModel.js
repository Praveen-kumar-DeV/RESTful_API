const mongoose = require("mongoose");
const student = require("../dataModels/student");
const UserSchema = new mongoose.Schema(student);

const User = mongoose.model("User", UserSchema);

module.exports = User;
