const { User, Mark } = require("../models/userModel");

exports.register = async (req, res) => {
  const user = new User(req.body);
  console.log(user);
  try {
    await user.save().catch((error) => {
      if (error.code == 11000)
        res.status(404).send({ message: "Duplicate Data" });
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.marks = async (req, res) => {
  const marks = new Mark(req.body);
  console.log(marks);
  try {
    await marks.save().catch((error) => {
      if (error.code == 11000)
        res.status(404).send({ message: "Duplicate Data" });
    });

    res.status(200).send(marks);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.conformRegister = async (req, res) => {
  const user = await User.find({});

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
  const userData = await User.findOneAndUpdate(
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

exports.deleteRegister = async (req, res) => {
  const regNumber = req.params.regNumber;
  const userData = await User.findOneAndRemove({ regNumber: regNumber });
  console.log(userData);
  try {
    res.status(200).send(userData);
  } catch (error) {
    res.status(500).send(error);
  }
};
