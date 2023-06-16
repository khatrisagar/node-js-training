const db = require("../../models");

const getUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};
// lazy laoding

const getUser = async (req, res) => {
  try {
    const data = await db.User.findOne({
      where: { id: req.params.id },
    });
    // called when it is neccesary
    const response = await data.getEducation();
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

// eager loading created using  include
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

module.exports = { getUsers, getUser, getUserWithEducation };
