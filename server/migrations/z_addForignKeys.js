'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // await queryInterface.addColumn('like_comment', 'user_id', Sequelize.INTEGER)
    // await queryInterface.addColumn('like_comment', 'item_id', Sequelize.INTEGER)
    // foreign key 연결
    // await queryInterface.addConstraint('대상 테이블', {
    //   fields: ['대상 컬럼 이름'],
    //   type: 'foreign key',
    //   name: 'FK_any_name_you_want',
    //   references: {
    //     table: '참조할 테이블',
    //     field: '참조할 값'
    //   },
    //   onDelete: 'cascade',
    //   onUpdate: 'cascade'
    // });
    await queryInterface.addConstraint('like_comment', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'FK_user_id',
      references: {
        table: 'user',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),
    await queryInterface.addConstraint('like_comment', {
        fields: ['item_id'],
        type: 'foreign key',
        name: 'FK_item_id',
        references: {
          table: 'item',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    }),

    await queryInterface.addConstraint('item', {
      fields: ['store_id'],
      type: 'foreign key',
      name: 'FK_store_id',
      references: {
        table: 'store',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),
    await queryInterface.addConstraint('item', {
      fields: ['event_id'],
      type: 'foreign key',
      name: 'FK_event_id',
      references: {
        table: 'event',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

    // 문어발 완성. 니들은 이런거 하지마라
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeConstraint('store_event_item', 'store_event_item_id')
    // await queryInterface.removeConstraint('store_event_item', 'FK_store_event_id')
    // await queryInterface.removeColumn('store_event_item', 'item_id');
    // await queryInterface.removeColumn('store_event_item', 'store_event_id')
  }
};