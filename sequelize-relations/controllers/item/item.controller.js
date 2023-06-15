const db = require("../../models");

const getItems = async (req, res) => {
  try {
    const items = await db.items.findAll({
      include: db.users,
    });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getItems };
