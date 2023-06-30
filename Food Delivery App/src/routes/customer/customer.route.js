const express = require("express");
const router = express.Router();

const {
  getFoodItems,
} = require("../../controllers/customer/customer.controller");

const { addUSer } = require("../../controllers/customer/add-user.controller");
router.get("/", getFoodItems);
router.post("/add-user", addUSer);

module.exports = router;
