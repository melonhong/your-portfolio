"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        email: "testuser@example.com",
        username: "testuser",
        password: "password123", // 비밀번호는 일반적으로 해시 처리하여 저장해야 함
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", {
      email: "testuser@example.com", // 삽입한 테스트 유저의 이메일로 삭제
    });
  },
};
