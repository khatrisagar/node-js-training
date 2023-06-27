"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("FoodItems", [
      // {
      //   name: "Ovenstory Pizza",
      //   categoryId: 1,
      //   price: 500,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "GoGreen by Nomad Pizza",
      //   categoryId: 1,
      //   price: 600,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "Diggin",
      //   categoryId: 1,
      //   price: 400,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "EATaliano - The Gourmet Pizzeria",
      //   categoryId: 1,
      //   price: 600,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "Burger 1",
      //   categoryId: 2,
      //   price: 200,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "Burger 2",
      //   categoryId: 2,
      //   price: 250,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      {
        name: "Burger 3",
        categoryId: 2,
        price: 966,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Burger 4",
        categoryId: 2,
        price: 545,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bheemeshwara - A South Indi",
        categoryId: 3,
        price: 450,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bikkgane Biryani",
        categoryId: 3,
        price: 369,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Behrouz Biryani",
        categoryId: 3,
        price: 258,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Biryani Badshah",
        categoryId: 3,
        price: 741,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Theobroma",
        categoryId: 5,
        price: 789,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cheesecake & Co.",
        categoryId: 5,
        price: 989,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mr. Crust Bakers",
        categoryId: 5,
        price: 365,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Havmor Havfunn Ice Cream",
        categoryId: 5,
        price: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Taco Bell",
        categoryId: 4,
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "RollsKing",
        categoryId: 4,
        price: 455,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blue Water Grille",
        categoryId: 4,
        price: 455,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rolls Mania",
        categoryId: 4,
        price: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      "FoodItems",
      { id: { [Op.in]: [7, 20] } },
      {}
    );
  },
};
