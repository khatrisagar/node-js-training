"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.FoodItem, { as: "supplier", foreignKey: "id" });
      User.hasOne(models.Order, { as: "customer", foreignKey: "userId" });
      User.hasOne(models.Order, {
        as: "deliveryAgent",
        foreignKey: "deliveryAgentId",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      contact: DataTypes.INTEGER,
      userRole: DataTypes.INTEGER,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
