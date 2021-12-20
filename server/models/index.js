'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];  //! 이부분 수정함 .json -> .js
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// association 설정
// 1(user):N(like_comment)
// ! const는 상수이므로, 한번만 변수 선언해야함. 해당 부분 수정
const {user, item, store, event_info} = sequelize.models
// like_comment.belongsTo(user)
// user.hasMany(like_comment, {foreignKey: 'user_id'})

// item.hasOne('store_event_item')
// store_event_item.belongsTo(item, {foreignKey: 'item_id'})

item.belongsToMany(user, {through: 'like-comment', foreignKey: 'item_id'})
user.belongsToMany(item, {through: 'like-comment', foreignKey: 'user_id'})

store.belongsToMany(event_info, {through: 'store_event_item', foreignKey: 'store_id'})
event_info.belongsToMany(store, {through: 'store_event_item', foreignKey: 'event_id'})


module.exports = db;