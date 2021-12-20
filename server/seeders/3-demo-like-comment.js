'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('like_comment', [
      {
        like: 0,
        comment: "testComment1ForZeroCola",
        user_id: 1,
        item_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        like: 0,
        comment: "testComment1ForTea",
        user_id: 1,
        item_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        like: 0,
        comment: "testComment1ForCoffee",
        user_id: 2,
        item_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('like_comment', null, {});
  }
};