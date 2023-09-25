const express = require("express");
const router = express.Router();
const {
  register,
  conformRegister,
  updateRegister,
  deleteRegister,
  marks,
} = require("../controllers/crudOperations");

router.route("/register").post(register);
router.route("/people").get(conformRegister);
router.route("/update/:name").put(updateRegister);
router.route("/delete/:regNumber").delete(deleteRegister);
router.route("/education").post(marks);
module.exports = router;
