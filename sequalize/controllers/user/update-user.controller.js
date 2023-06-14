const db = require("../../models");

const updateUser = async (req, res) => {
  try {
    await db.User.update({ ...req.body }, { where: { id: req.params.id } });
    res.json({ message: "data Updated successfully" });
  } catch (error) {
    res.json(error);
  }
};
module.exports = { updateUser };
