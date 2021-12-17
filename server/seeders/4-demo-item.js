'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('item', [
      {
        name: "제로콜라",
        price: 1900,
        img: "dummyImg",
        ranking: 0,
        category_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "보성녹차",
        price: 1200,
        img: "dummyImg",
        ranking: 0,
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "칸타타",
        price: 900,
        img: "dummyImg",
        ranking: 0,
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('item', null, {});
  }
};
