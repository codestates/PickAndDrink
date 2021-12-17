'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
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
const {user, like_comment} = sequelize.models
like_comment.belongsTo(user)
user.hasMany(like_comment, {foreignKey: 'user_id'})

// 1(item):N(like_comment)
const {item, like_comment} = sequelize.models
like_comment.belongsTo(item)
item.hasMany(like_comment, {foreignKey: 'item_id'})

// 1(category):N(item)
const {item, category} = sequelize.models
item.belongsTo(category)
category.hasMany(item, {foreignKey: 'category_id'})

// 1(category):N(item)
const {item, store_event_item} = sequelize.models
store_event_item.belongsTo(item)
item.hasMany(store_event_item, {foreignKey: 'item_id'})

// 1(category):N(item)
const {store_event, store_event_item} = sequelize.models
store_event_item.belongsTo(store_event)
store_event.hasMany(store_event_item, {foreignKey: 'store_event_id'})

module.exports = db;
