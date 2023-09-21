const express = require("express");
const app = express();
const connectDb = require("./config/db");
const userModel = require("./models/model");

connectDb();
app.use(express.json());

app.post("/add_user", async (req, res) => {
  const user = new userModel(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get("/users", async (req, res) => {
  const users = await userModel.find({});

  try {
    console.log(users[6]);
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get("/attendance", async (req, res) => {
  let { regNumber, semster } = req.query;
  const usersData = await userModel.findOneAndUpdate(
    { regNumber: regNumber },
    { semster: semster },
    { new: true }
  );

  try {
    res.send(usersData);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.listen(8080, (e) => {
  if (!e) console.log("server running on port 8080");
  else console.error(e);
});
