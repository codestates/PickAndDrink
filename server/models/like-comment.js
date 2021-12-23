"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class like_comment extends Model {
    static associate(models) {}
  }
  like_comment.init(
    {
      user_id: DataTypes.INTEGER,
      item_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      like: DataTypes.TINYINT,
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      underscored: true,
      freezeTableName: true,
      tableName: "like_comment",
    }
  );
  return like_comment;
};
