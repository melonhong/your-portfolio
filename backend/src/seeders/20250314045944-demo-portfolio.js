"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const exist = await queryInterface.rawSelect(
      "portfolios",
      {
        where: { user_id: "1" },
      },
      ["id"] // 특정 컬럼 선택 (존재 여부만 확인)
    );

    if (!exist) {
      await queryInterface.bulkInsert("portfolios", [
        {
          user_id: 1, // 실제로 존재하는 user_id를 설정해야 함
          title: "Test Portfolio",
          description: "This is a test portfolio description.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("portfolios", {
      user_id: 1, // 삽입한 테스트 포트폴리오의 user_id로 삭제
    });
  },
};
