'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class store_event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  store_event.init({
    store_name: DataTypes.STRING,
    event_info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'store_event',
  });
  return store_event;
};