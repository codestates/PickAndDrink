'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    static associate(models) {
    }
  };
  item.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img: DataTypes.STRING,
    ranking_count: DataTypes.INTEGER,
    category: DataTypes.STRING,
    store_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    freezeTableName: true,
    tableName: 'item'
  });
  return item;
};