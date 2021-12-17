'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // field 추가
    // await queryInterface.addColumn('대상 테이블', '생성할 컬럼이름', Sequelize.INTEGER);
    await queryInterface.addColumn('like_comment', 'user_id', Sequelize.INTEGER)
    await queryInterface.addColumn('like_comment', 'item_id', Sequelize.INTEGER)
    await queryInterface.addColumn('item', 'category_id', Sequelize.INTEGER)
    await queryInterface.addColumn('store_event_item', 'item_id', Sequelize.INTEGER)
    await queryInterface.addColumn('store_event_item', 'store_event_id', Sequelize.INTEGER)

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
    })
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
    })
    await queryInterface.addConstraint('item', {
      fields: ['category_id'],
      type: 'foreign key',
      name: 'FK_category_id',
      references: {
        table: 'category',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
    await queryInterface.addConstraint('store_event_item', {
      fields: ['item_id'],
      type: 'foreign key',
      name: 'store_event_item_id',
      references: {
        table: 'item',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('store_event_item', {
      fields: ['store_event_id'],
      type: 'foreign key',
      name: 'FK_store_event_id',
      references: {
        table: 'store_event',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('like_comment', 'FK_user_id');
    await queryInterface.removeConstraint('like_comment', 'FK_category_id');
    await queryInterface.removeConstraint('item', 'FK_item_id');
    await queryInterface.removeConstraint('store_event_item', 'store_event_item_id')
    await queryInterface.removeConstraint('store_event_item', 'FK_store_event_id')

    await queryInterface.removeColumn('like_comment', 'user_id');
    await queryInterface.removeColumn('like_comment', 'item_id')
    await queryInterface.removeColumn('item', 'category_id');
    await queryInterface.removeColumn('store_event_item', 'item_id');
    await queryInterface.removeColumn('store_event_item', 'store_event_id')
  }
};
