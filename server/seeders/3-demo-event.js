"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("event", [
      {
        info: "1+1", // 1+1
      },
      {
        info: "2+1", // 2+1
      },
      {
        info: "특가", // 특가
        description: "100원 할인",
      },
      {
        info: "특가", // 특가
        description: "200원 할인",
      },
      {
        info: "특가", // 특가
        description: "300원 할인",
      },
      {
        info: "특가", // 특가
        description: "400원 할인",
      },
      {
        info: "특가", // 특가
        description: "500원 할인",
      },
      {
        info: "특가", // 특가
        description: "600원 할인",
      },
      {
        info: "특가", // 특가
        description: "700원 할인",
      },
      {
        info: "특가", // 특가
        description: "800원 할인",
      },
      {
        info: "특가", // 특가
        description: "900원 할인",
      },
      {
        info: "특가", // 특가
        description: "1000원 할인",
      },
      {
        info: "특가", // 특가
        description: "구매시 쥬시쿨(200ml) 증정",
      },
      {
        info: "특가", // 특가
        description: "구매시 삼각김밥(참치마요) 증정",
      },
      {
        info: "특가", // 특가
        description: "구매시 칠성사이다캔(210ml) 증정",
      },
      {
        info: "특가", // 특가
        description: "구매시 제주삼다수(500ml) 증정",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("event", null, {});
  },
};
