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
      {
        item_id: 4,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 5,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 6,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 7,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 8,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 9,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 10,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 11,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 12,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 13,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 14,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 15,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 16,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 17,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 18,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 19,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 20,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 21,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 22,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 23,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 24,
        store_id: 1,
        event_id: 1
      },
      {
        item_id: 25,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 26,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 27,
        store_id: 1,
        event_id: 2
      },
{
        item_id: 28,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 29,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 30,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 31,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 32,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 33,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 34,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 35,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 36,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 37,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 38,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 39,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 40,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 41,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 42,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 43,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 44,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 45,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 46,
        store_id: 1,
        event_id: 2
      },
      {
        item_id: 47,
        store_id: 1,
        event_id: 2
      },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('store_event_item', null, {});
  }
};
