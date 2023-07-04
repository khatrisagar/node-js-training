"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PaymentInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PaymentInfo.belongsTo(models.Order);
    }
  }
  PaymentInfo.init(
    {
      orderId: {
        type: DataTypes.INTEGER,
        references: "Orders",
        key: "id",
      },
      paymnetType: DataTypes.STRING,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PaymentInfo",
    }
  );
  return PaymentInfo;
};
