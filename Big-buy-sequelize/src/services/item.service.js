const { Item } = require("../models");
const createItemService = (itemData, sellerId) => {
  const item = Item.create({
    name: itemData.name,
    description: itemData.details.description,
    price: itemData.details.price,
    minPrice: itemData.details.minPrice,
    maxPrice: itemData.details.maxPrice,
    seller: sellerId,
  });

  return item;
};

const getItemService = async (itemId) => {
  try {
    const item = await Item.findOne({
      where: { id: itemId },
    });
    return item;
  } catch (error) {
    throw new Error(error);
  }
};
const getSellerItemsService = (sellerId) => {
  const items = Item.findAll({
    where: {
      seller: sellerId,
    },
  });

  return items;
};
const getItemsService = (apiOptions) => {
  console.log("apiOptions", apiOptions);
  const items = Item.findAll({ ...apiOptions });
  return items;
};

const updateItemService = (itemData, itemId) => {
  const item = Item.update(
    {
      name: itemData.name,
      description: itemData.details.description,
      price: itemData.details.price,
      minPrice: itemData.details.minPrice,
      maxPrice: itemData.details.maxPrice,
    },
    {
      where: {
        id: itemId,
      },
    }
  );
  return item;
};

const deleteItemService = async (itemId, res) => {
  try {
    const isItem = await getItemService(itemId);
    if (isItem) {
      const item = await Item.destroy({
        where: { id: itemId },
      });
      return item;
    } else {
      throw new Error("Item Not Exist");
    }
  } catch (error) {
    console.log("error.message", error.message);
    throw new Error(error.message);
  }
};

const getItemsCountService = async (apiOptions) => {
  try {
    const items = Item.count({ ...apiOptions });
    return items;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createItemService,
  getItemService,
  getSellerItemsService,
  getItemsService,
  updateItemService,
  deleteItemService,
  getItemsCountService,
};
