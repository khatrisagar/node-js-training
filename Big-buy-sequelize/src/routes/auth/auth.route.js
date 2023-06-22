const express = require("express");
const router = express.Router();

const { userSignup } = require("../../controllers/auth/sign-up.controller");
const { userLogin } = require("../../controllers/auth/login.controller");

router.post("/sign-up", userSignup);
router.post("/login", userLogin);

module.exports = router;
