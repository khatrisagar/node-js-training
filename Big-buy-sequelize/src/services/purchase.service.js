const { Item, Purchase } = require("../models");

const purchaseService = async (purchaseObject) => {
  try {
    const purchase = await Purchase.create({
      ...purchaseObject,
    });
    return purchase;
  } catch (error) {
    throw new Error(error);
  }
};
const getMyPurchaseService = async (userId) => {
  try {
    const purchase = await Purchase.findAll({
      attributes: ["user", "purchasePrice"],
      where: { user: userId },
      include: Item,
    });
    return purchase;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { purchaseService, getMyPurchaseService };
