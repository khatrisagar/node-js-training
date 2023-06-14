var express = require("express");
const router = express.Router();

const { getuser } = require("../../controllers/user/get-user.controller");

router.get("/", getuser);

module.exports = router;
