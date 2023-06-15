const db = require("../../models");

const getUsers = async (req, res) => {
  try {
    const users = await db.users.findAll({
      include: db.items,
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
// const addUser = async (user) => {

// }

module.exports = { getUsers };
