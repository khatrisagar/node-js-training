"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class faculty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      faculty.belongsToMany(models.subject, {
        through: "subjectFaculty",
      });
    }
  }
  faculty.init(
    {
      facultyName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "faculty",
    }
  );
  return faculty;
};
