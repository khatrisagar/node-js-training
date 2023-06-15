const express = require("express");
const router = express.Router();

const { getItems } = require("../../controllers/item/item.controller");

router.get("/", getItems);

module.exports = router;
