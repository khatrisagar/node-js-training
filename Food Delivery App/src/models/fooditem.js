"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FoodItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      FoodItem.belongsToMany(models.Order, {
        through: "OrderItems",
        foreignKey: "itemId",
      });
      FoodItem.belongsTo(models.FoodCategory, {
        as: "category",
      });
    }
  }
  FoodItem.init(
    {
      name: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "FoodItem",
    }
  );
  return FoodItem;
};
