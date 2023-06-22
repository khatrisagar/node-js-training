const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./.env.development" });

const createJWTToken = (userId) => {
  const token = jwt.sign({ id: userId }, process.env.SECRET);
  return token;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.SECRET);
  return decoded;
};

module.exports = { createJWTToken, verifyToken };
