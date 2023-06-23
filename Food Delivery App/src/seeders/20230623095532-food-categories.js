"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("FoodCategories", [
      {
        name: "Pizza",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Burger",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Biryani",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rolls",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cake",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sandwich",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dosa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chinese",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("FoodCategories", null, {});
  },
};
