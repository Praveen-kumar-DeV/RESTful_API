const mongoose = require("mongoose");
const { student, academicData } = require("../dataModels/student");
const UserSchema = new mongoose.Schema(student);
const MarkSchema = new mongoose.Schema(academicData);
const Mark = mongoose.model("Marks", MarkSchema);
const User = mongoose.model("User", UserSchema);

module.exports = { User, Mark };
