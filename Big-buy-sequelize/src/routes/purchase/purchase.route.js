const express = require("express");
const router = express.Router();

const {
  purchaseItem,
  myPurchaseItems,
} = require("../../controllers/purchase/purchase.controller");

router.post("/purchase", purchaseItem);
router.get("/my-purchase", myPurchaseItems);

module.exports = router;
