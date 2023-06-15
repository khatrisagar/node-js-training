const db = require("../../models");

const getUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};

const getUserWithEducation = async (req, res) => {
  try {
    const user = await db.User.findAll({
      include: db.Education,
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { getUsers, getUserWithEducation };
