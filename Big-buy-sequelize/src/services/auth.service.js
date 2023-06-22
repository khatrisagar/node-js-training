const { User } = require("../models");
const { encryptPassword } = require("../utils/helpers/bcrypt.helper");

const signUpService = async (formData) => {
  User.beforeCreate(async (formData) => {
    const hashedPassword = await encryptPassword(formData.password);
    formData.password = hashedPassword;
  });

  const user = await User.create({
    name: formData.name,
    surname: formData.surname,
    age: formData.age,
    contact: formData.contact,
    address: formData.address,
    email: formData.email,
    password: formData.password,
  });
  return user;
};

const getUserService = async (email) => {
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  return user;
};

module.exports = { signUpService, getUserService };
