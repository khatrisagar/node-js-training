const { deleteItemService } = require("../../services/item.service");

const deleteItem = async (req, res) => {
  try {
    await deleteItemService(req.params.id);
    res.status(200).json({ message: "Item deletd Successfully" });
  } catch (error) {
    console.log("cccccccc", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { deleteItem };
