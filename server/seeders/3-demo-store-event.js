'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('store_event', [
    {
      store_name: "GS25",
      event_info: "1+1",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      store_name: "GS25",
      event_info: "1+2",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      store_name: "GS25",
      event_info: "덤증정",
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('store_event', null, {});
  }
};
