'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class store_event_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  store_event_item.init({
    // store_event_id: DataTypes.INTEGER,
    // item_id: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    freezeTableName: true,
    tableName: 'store_event_item',
  });
  return store_event_item;
};