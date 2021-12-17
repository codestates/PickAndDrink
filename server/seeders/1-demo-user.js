'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [
      {
      username: 'John',
      email: 'example@example.com',
      password: 'testPW',
      nickname: "Tester",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      username: '김코딩',
      email: 'kimcoding@example.com',
      password: 'testPW',
      nickname: "Tester",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      username: '박코딩',
      email: 'parkcoding@example.com',
      password: 'testPW',
      nickname: "Tester",
      created_at: new Date(),
      updated_at: new Date()
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};
