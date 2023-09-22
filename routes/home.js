const express = require("express");
const router = express.Router();
const {
  register,
  conformRegister,
  updateRegister,
} = require("../controllers/crud");

router.route("/register").post(register);
router.route("/people").get(conformRegister);
router.route("/update/:name").put(updateRegister);

module.exports = router;
