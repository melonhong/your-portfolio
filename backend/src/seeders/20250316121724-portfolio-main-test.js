"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    for (let i = 1; i <= 10; i++) {
      await queryInterface.bulkInsert("users", [
        {
          email: `testuser${i}@example.com`,
          username: `testuser${i}`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);

      await queryInterface.bulkInsert("portfolios", [
        {
          user_id: `${i}`,
          title: `testuser${i}'s portfolio`,
          description: `This is a test portfolio by testuser${i}.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
