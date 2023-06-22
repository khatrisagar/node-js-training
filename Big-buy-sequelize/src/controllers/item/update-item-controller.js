const { updateItemService } = require("../../services/item.service");

const updateItem = async (req, res) => {
  try {
    const item = await updateItemService(req.body, req.params.id);
    res.status(201).json({ message: "Item Updated Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { updateItem };
