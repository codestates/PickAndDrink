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
const {user, item, like_comment, category, store_event_item, store_event} = sequelize.models
like_comment.belongsTo(user)
user.hasMany(like_comment, {foreignKey: 'user_id'})

// 1(item):N(like_comment)
// const {item, like_comment} = sequelize.models
like_comment.belongsTo(item)
item.hasMany(like_comment, {foreignKey: 'item_id'})

// 1(category):N(item)
// const {item, category} = sequelize.models
item.belongsTo(category)
category.hasMany(item, {foreignKey: 'category_id'})


// 추가된 내용
/*
  Table1 - Join Table - Table2 로 M:N 관계를 구현
  중요한 부분은 서로 through: JoinTable, foreignKey: 각각_참조하는_키 를 지정해 참조관계를 지정해줘야함.
  
  - Table1과 Join Table의 관계 설정
    Table1 -> hasMany -> Join Table
          <- belongsTo <-
  
  - Table2와 Join Talbe의 관계 설정
    Table2 -> hasMany -> Join Table
          <- belongsTo <-
  
  - Table1과 Table2의 관계 설정
    Table1 -> belongsToMany -> Table2
           <- belongsToMany <-

  ref: https://wooooooak.github.io/node.js/2018/11/22/sequelize-1-%EB%8C%80-%EB%8B%A4/
*/

// 각 테이블의 1:N관계 없애도 되는지는 잘 모르겠습니다
// 일단 제가 테스트할때는 잘 작동해서 주석처리했는데 혹시 오작동하면 주석 풀고 한번더 테스트 부탁드립니다
// item.hasMany(store_event_item, {foreignKey: 'item_id'})
// store_event_item.belongsTo(item, {foreignKey: 'item_id'})
// store_event.hasMany(store_event_item, {foreignKey: 'store_event_id'})
// store_event_item.belongsTo(store_event, {foreignKey: 'store_event_id'})

// # item 과 store_event 의 M:N 관계를 정의
// through(필수)만 지정하면 해당 참조테이블이 자동 생성되고, 해당 테이블에 자동으로 참조하는 값이 생성
// foreignKey를 지정하면 해당 키값으로 참조
item.belongsToMany(store_event, {through: 'store_event_item', foreignKey: 'item_id'})
store_event.belongsToMany(item, {through: 'store_event_item', foreignKey: 'store_event_id'})

// 버려진 코드: 혹시 몰라 복구할때를 대비해 남겨두었습니다
// // 1(category):N(item)
// // const {item, store_event_item} = sequelize.models
// store_event_item.belongsTo(item)
// item.hasMany(store_event_item, {foreignKey: 'item_id'})

// // 1(category):N(item)
// // const {store_event, store_event_item} = sequelize.models
// store_event_item.belongsTo(store_event)
// store_event.hasMany(store_event_item, {foreignKey: 'store_event_id'})

module.exports = db;