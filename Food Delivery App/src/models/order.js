"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsToMany(models.FoodItem, {
        through: "OrderItems",
        foreignKey: "orderId",
        as: "items",
      });
      Order.hasOne(models.PaymentInfo, { as: "payment", foreignKey: "id" });
      Order.belongsTo(models.User, { as: "customer", foreignKey: "userId" });
      Order.belongsTo(models.User, {
        as: "deliveryAgent",
        foreignKey: "deliveryAgentId",
      });
    }
  }
  Order.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: "Users",
        key: "id",
      },
      deliveryAgentId: {
        type: DataTypes.INTEGER,
        references: "Users",
        key: "id",
      },
      userAddress: DataTypes.STRING,
      paymnentId: {
        type: DataTypes.INTEGER,
        references: "paymnentInfos",
        key: "id",
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
