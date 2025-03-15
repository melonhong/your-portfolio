"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const exist = await queryInterface.rawSelect(
      "users",
      {
        where: { email: "testuser@example.com" },
      },
      ["id"] // 특정 컬럼 선택 (존재 여부만 확인)
    );

    if (!exist) {
      await queryInterface.bulkInsert("users", [
        {
          email: "testuser@example.com",
          username: "testuser",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", {
      email: "testuser@example.com",
    });
  },
};
