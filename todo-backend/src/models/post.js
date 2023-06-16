"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // define association here
      Post.hasMany(models.Comment, {
        foreignKey: "postId",
      });
    }
  }
  Post.init(
    {
      id: { primaryKey: true, type: DataTypes.INTEGER },
      userId: { type: DataTypes.INTEGER, isInt: true, notEmpty: true },
      title: { type: DataTypes.STRING, notEmpty: true },
      body: { type: DataTypes.STRING, notEmpty: true },
      deletedAt: { type: DataTypes.DATE },
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "Post",
    }
  );
  return Post;
};
