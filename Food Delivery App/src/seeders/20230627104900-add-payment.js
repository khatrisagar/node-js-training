"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("PaymentInfos", [
      {
        orderId: 4,
        paymnetType: "cash",
        amount: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 5,
        paymnetType: "cash",
        amount: 1500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 6,
        paymnetType: "online",
        amount: 2000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 7,
        paymnetType: "online",
        amount: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 8,
        paymnetType: "online",
        amount: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 9,
        paymnetType: "cash",
        amount: 1600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 10,
        paymnetType: "online",
        amount: 630,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 11,
        paymnetType: "online",
        amount: 452,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 12,
        paymnetType: "cash",
        amount: 684,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 13,
        paymnetType: "online",
        amount: 697,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 14,
        paymnetType: "cash",
        amount: 471,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 15,
        paymnetType: "online",
        amount: 520,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 16,
        paymnetType: "cash",
        amount: 365,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 17,
        paymnetType: "cash",
        amount: 145,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 18,
        paymnetType: "cash",
        amount: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 19,
        paymnetType: "online",
        amount: 365,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 20,
        paymnetType: "online",
        amount: 352,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 21,
        paymnetType: "online",
        amount: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete("PaymentInfos", null, {});
  },
};
