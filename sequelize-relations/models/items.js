"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      items.belongsToMany(models.users, {
        through: "orders",
        foreignKey: "itemId",
      });
    }
  }
  items.init(
    {
      itemName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "items",
    }
  );
  return items;
};
