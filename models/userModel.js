const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  semster: {
    type: Number,
    default: 0,
  },
  branch: {
    type: String,
    required: true,
  },
  regNumber: {
    type: Number,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
