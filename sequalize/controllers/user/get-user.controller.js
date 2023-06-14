const db = require("../../models");

const getUser = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { getUser };
