const db = require("../../models");

const addUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, age, contact } = req.body;
    const user = await db.User.create({
      firstName,
      lastName,
      email,
      password,
      age,
      contact,
    });
    res.json({ message: "data added successfully", user });
  } catch (err) {
    res.json(err);
  }
};
module.exports = { addUser };
