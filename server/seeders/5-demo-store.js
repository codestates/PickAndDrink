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
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('store', null, {});
  }
};