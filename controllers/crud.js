const userModel = require("../models/model");

exports.register = async (req, res) => {
  const user = new userModel(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.conformRegister = async (req, res) => {
  const user = await userModel.find({});

  try {
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateRegister = async (req, res) => {
  const name = req.params.name;
  console.log(req.params.name);
  const semster = req.body;
  console.log(semster.semster);
  const userData = await userModel.findOneAndUpdate(
    { name: name },
    { semster: semster.semster },
    { new: true }
  );

  try {
    console.log(userData);
    res.status(200).send(userData);
  } catch (error) {
    res.status(500).send(error);
  }
};
