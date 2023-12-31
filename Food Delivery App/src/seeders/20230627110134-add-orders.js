"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Orders", [
      {
        userId: 5,
        deliveryAgentId: 12,
        userAddress: "fsdfsdf",
        paymnentId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        deliveryAgentId: 11,
        userAddress: "fsdfsdf",
        paymnentId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        deliveryAgentId: 13,
        userAddress: "fsdfsdf",
        paymnentId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 8,
        deliveryAgentId: 14,
        userAddress: "fsdfsdf",
        paymnentId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 9,
        deliveryAgentId: 11,
        userAddress: "fsdfsdf",
        paymnentId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 10,
        deliveryAgentId: 14,
        userAddress: "fsdfsdf",
        paymnentId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        deliveryAgentId: 13,
        userAddress: "fsdfsdf",
        paymnentId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        deliveryAgentId: 12,
        userAddress: "fsdfsdf",
        paymnentId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        deliveryAgentId: 11,
        userAddress: "fsdfsdf",
        paymnentId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        deliveryAgentId: 14,
        userAddress: "fsdfsdf",
        paymnentId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 8,
        deliveryAgentId: 11,
        userAddress: "fsdfsdf",
        paymnentId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 9,
        deliveryAgentId: 12,
        userAddress: "fsdfsdf",
        paymnentId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 10,
        deliveryAgentId: 13,
        userAddress: "fsdfsdf",
        paymnentId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 10,
        deliveryAgentId: 14,
        userAddress: "fsdfsdf",
        paymnentId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 10,
        deliveryAgentId: 12,
        userAddress: "fsdfsdf",
        paymnentId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        deliveryAgentId: 12,
        userAddress: "fsdfsdf",
        paymnentId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        deliveryAgentId: 13,
        userAddress: 1000,
        paymnentId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        deliveryAgentId: 14,
        userAddress: 1000,
        paymnentId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
