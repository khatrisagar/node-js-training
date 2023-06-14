const db = require("../../models");

const deleteUser = async (req, res) => {
  try {
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.json(error);
  }
};

module.exports = { deleteUser };
