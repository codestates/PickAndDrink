"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("user", [
      {
        username: "테스터1",
        email: "tester1@test.com",
        password: "testPW",
        nickname: "테스터1별명",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "테스터2",
        email: "tester2@test.com",
        password: "testPW",
        nickname: "테스터2별명",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "테스터3",
        email: "tester3@test.com",
        password: "testPW",
        nickname: "테스터3별명",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "테스터4",
        email: "tester4@test.com",
        password: "testPW",
        nickname: "테스터4별명",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "테스터5",
        email: "tester5@test.com",
        password: "testPW",
        nickname: "테스터5별명",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "테스터6",
        email: "tester6@test.com",
        password: "testPW",
        nickname: "테스터6별명",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user", null, {});
  },
};
