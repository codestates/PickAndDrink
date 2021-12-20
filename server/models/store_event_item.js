'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class store_event_item extends Model {
    static associate(models) {}
  };
  store_event_item.init({
    item_id: DataTypes.INTEGER,
    store_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
  }, {
    sequelize,
    underscored: true,
    freezeTableName: true,
    tableName: 'store_event_item',
    timestamps: false
  });
  return store_event_item;
};