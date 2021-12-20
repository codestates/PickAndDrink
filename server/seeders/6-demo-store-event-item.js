'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('store_event_item', [
      {
        item_id: 1,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 2,
        store_id: 2,
        event_id: 2
      },
      {
        item_id: 3,
        store_id: 3,
        event_id: 3
      },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('store_event_item', null, {});
  }
};