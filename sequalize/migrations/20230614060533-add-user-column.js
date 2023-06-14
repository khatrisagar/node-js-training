"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.addColumn("Users", "age", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
      queryInterface.addColumn("Users", "contact", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("Users", "age");
    queryInterface.removeColumn("Users", "contact");
  },
};
