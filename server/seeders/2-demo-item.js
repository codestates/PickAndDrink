'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('item', [
      {
        name: "제로콜라",
        price: 1900,
        img: "dummyImg",
        ranking: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "보성녹차",
        price: 1200,
        img: "dummyImg",
        ranking: 0,
        category: "차",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "칸타타",
        price: 900,
        img: "dummyImg",
        ranking: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date()
      },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('item', null, {});
  }
};
