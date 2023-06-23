const express = require("express");
const router = express.Router();

const {
  getFoodItems,
} = require("../../controllers/customer/customer.controller");

router.get("/", getFoodItems);

module.exports = router;
