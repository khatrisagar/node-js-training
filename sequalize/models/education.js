"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Education extends Model {
    static associate(models) {
      // define association here
      Education.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Education.init(
    {
      userId: DataTypes.INTEGER,
      collegeName: DataTypes.STRING,
      universityName: DataTypes.STRING,
      passingYear: DataTypes.NUMBER,
      score: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Education",
    }
  );
  return Education;
};
