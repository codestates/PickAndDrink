'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('store', [
    {
      name: "GS25",
    },
    {
      name: "CU",
    },
    {
      name: "미니스톱",
    },
    {
      name: "이마트24",
    },
    {
      name: "세븐일레븐",
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('store', null, {});
  }
};