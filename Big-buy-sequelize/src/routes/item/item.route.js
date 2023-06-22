const express = require("express");
const router = express.Router();

const { createItem } = require("../../controllers/item/create-item.controller");
const { updateItem } = require("../../controllers/item/update-item-controller");
const { deleteItem } = require("../../controllers/item/delete-item.controller");
const {
  getItem,
  getItems,
  getSellerItems,
} = require("../../controllers/item/get-item.controller");

router.post("/", createItem);
router.get("/my-items", getSellerItems);
router.get("/:id", getItem);
router.get("/", getItems);
router.patch("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
