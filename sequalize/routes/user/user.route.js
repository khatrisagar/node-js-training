var express = require("express");
const router = express.Router();

const { getUser } = require("../../controllers/user/get-user.controller");
const { addUser } = require("../../controllers/user/add-user.controller");
const { deleteUser } = require("../../controllers/user/delete-user.controller");
const { updateUser } = require("../../controllers/user/update-user.controller");

router.get("/", getUser);
router.post("/add-user", addUser);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);

module.exports = router;
