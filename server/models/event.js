"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    static associate(models) {}
  }
  event.init(
    {
      info: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      underscored: true,
      freezeTableName: true,
      tableName: "event",
      timestamps: false,
    }
  );
  return event;
};
