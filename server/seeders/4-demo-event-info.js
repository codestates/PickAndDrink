'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('event_info', [
    {
        info: "1+1", // 1+1
    },
    {
        info: "2+1", // 2+1
    },
    {
        info: "특가", // 특가
        discount: 100
    },
    {
        info: "특가", // 특가
        discount: 500
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('event_info', null, {});
  }
};