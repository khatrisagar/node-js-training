"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("FoodItems", [
      {
        name: "Ovenstory Pizza",
        categoryId: 1,
        price: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "GoGreen by Nomad Pizza",
        categoryId: 1,
        price: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Diggin",
        categoryId: 1,
        price: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "EATaliano - The Gourmet Pizzeria",
        categoryId: 1,
        price: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Burger 1",
        categoryId: 2,
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Burger 2",
        categoryId: 2,
        price: 250,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("FoodItems", null, {});
  },
};
