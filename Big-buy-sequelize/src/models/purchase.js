"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Purchase.belongsTo(models.Item, { foreignKey: "item" });
    }
  }
  Purchase.init(
    {
      user: DataTypes.INTEGER,
      item: DataTypes.INTEGER,
      purchasePrice: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Purchase",
    }
  );
  return Purchase;
};
