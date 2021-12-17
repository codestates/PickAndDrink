'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('store_event_item', [
    {
      item_id: 1,
      store_event_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      item_id: 2,
      store_event_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      item_id: 3,
      store_event_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('store_event_item', null, {});
  }
};
