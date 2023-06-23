"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FoodCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FoodCategory.hasMany(models.FoodItem, {
        foreignKey: "categoryId",
        as: "items",
      });
    }
  }
  FoodCategory.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "FoodCategory",
    }
  );
  return FoodCategory;
};
