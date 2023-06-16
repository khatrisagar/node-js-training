const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUser,
  getUserWithEducation,
} = require("../../controllers/user/get-user.controller");
const { addUser } = require("../../controllers/user/add-user.controller");
const { deleteUser } = require("../../controllers/user/delete-user.controller");
const { updateUser } = require("../../controllers/user/update-user.controller");

router.get("/", getUsers);
router.get("/:id", getUser);
router.get("/user-education", getUserWithEducation);
router.post("/add-user", addUser);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);

module.exports = router;
