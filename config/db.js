const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/userdb";
const connectDB = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((e) => {
      console.log("successfully connectd to Database");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = connectDB;
