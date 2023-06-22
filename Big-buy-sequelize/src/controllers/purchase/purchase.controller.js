const {
  purchaseService,
  getMyPurchaseService,
} = require("../../services/purchase.service");
const purchaseItem = async (req, res) => {
  try {
    const purchaseObject = {
      user: req.user.id,
      item: req.body.item,
      purchasePrice: req.body.purchasePrice,
    };
    const purchase = await purchaseService(purchaseObject);
    res.status(201).json(purchase);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const myPurchaseItems = async (req, res) => {
  try {
    const userId = req.user.id;
    const purchases = await getMyPurchaseService(userId);
    res.status(200).json(purchases);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { purchaseItem, myPurchaseItems };
