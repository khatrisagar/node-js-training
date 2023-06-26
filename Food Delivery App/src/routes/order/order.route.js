const express = require("express");
const router = express.Router();

const {
  getOrdersData,
} = require("../../controllers/order/getOrderData.controller");

router.get("/", getOrdersData);

module.exports = router;
