"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class store extends Model {
    static associate(models) {}
  }
  store.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      underscored: true,
      freezeTableName: true,
      tableName: "store",
      timestamps: false,
    }
  );
  return store;
};
