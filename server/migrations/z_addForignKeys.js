"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.addColumn('like_comment', 'user_id', Sequelize.INTEGER)
    // await queryInterface.addColumn('like_comment', 'item_id', Sequelize.INTEGER)

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

    await queryInterface.addConstraint("like_comment", {
      fields: ["user_id"],
      type: "foreign key",
      name: "FK_user_id",
      references: {
        table: "user",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
      await queryInterface.addConstraint("like_comment", {
        fields: ["item_id"],
        type: "foreign key",
        name: "FK_item_id",
        references: {
          table: "item",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
      await queryInterface.addConstraint("item", {
        fields: ["store_id"],
        type: "foreign key",
        name: "FK_store_id",
        references: {
          table: "store",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
      await queryInterface.addConstraint("item", {
        fields: ["event_id"],
        type: "foreign key",
        name: "FK_event_id",
        references: {
          table: "event",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("item", "FK_event_id");
    await queryInterface.removeConstraint("item", "FK_store_id");
    await queryInterface.removeConstraint("like_comment", "FK_item_id");
    await queryInterface.removeConstraint("like_comment", "FK_user_id");
  },
};
