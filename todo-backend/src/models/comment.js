"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Post, {
        foreignKey: "postId",
      });
    }
  }
  Comment.init(
    {
      id: { primaryKey: true, type: DataTypes.INTEGER },
      postId: {
        type: DataTypes.INTEGER,
        validate: { isInt: true, notEmpty: true },
      },
      name: { type: DataTypes.STRING, notEmpty: true },
      email: {
        type: DataTypes.STRING,
        validate: { isEmail: true, notEmpty: true },
      },
      body: { type: DataTypes.STRING, notEmpty: true },
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
