'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event_info extends Model {
    static associate(models) {}
  };
  event_info.init({
    info: DataTypes.STRING,
    discount: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    freezeTableName: true,
    tableName: 'event_info',
    timestamps: false
  });
  return event_info;
};