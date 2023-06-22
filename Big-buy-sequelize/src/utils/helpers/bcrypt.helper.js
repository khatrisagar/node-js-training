const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
  const encryptedPassword = bcrypt.hash(password, 10);
  return encryptedPassword;
};

const verifyPassword = async (password, encryptedPass) => {
  const isAuthenticated = await bcrypt.compare(password, encryptedPass);
  return isAuthenticated;
};

module.exports = { encryptPassword, verifyPassword };
