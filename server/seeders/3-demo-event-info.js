'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('event', [
    {
        info: "1+1", // 1+1
    },
    {
        info: "2+1", // 2+1
    },
    {
        info: "특가", // 특가
        description: 100
    },
    {
        info: "특가", // 특가
        description: 500
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('event', null, {});
  }
};