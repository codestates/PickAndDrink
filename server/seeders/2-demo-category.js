'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('category', [
      {
        name: "탄산음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "차",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "커피",
        created_at: new Date(),
        updated_at: new Date()
      },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('category', null, {});
  }
};
