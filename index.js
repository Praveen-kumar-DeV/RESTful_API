const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./model");
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/userdb", {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then((conn) => {
    console.log("successfully connectd to DB : ", conn.connection.host);
  });

app.post("/add_user", async (request, response) => {
  const user = new userModel(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/users", async (request, response) => {
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.listen(8080, (e) => {
  if (!e) console.log("server running on port 8080");
  else console.error(e);
});
