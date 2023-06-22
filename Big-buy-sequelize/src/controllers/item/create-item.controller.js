const { createItemService } = require("../../services/item.service");

const createItem = async (req, res) => {
  try {
    const sellerId = req.user.id;
    const item = await createItemService(req.body, sellerId);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createItem };
