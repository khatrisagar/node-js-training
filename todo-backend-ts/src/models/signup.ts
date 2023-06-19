"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SignUp extends Model {
    static associate(models) {
      // define association here
    }
  }
  SignUp.init(
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "SignUp",
    }
  );
  return SignUp;
};
