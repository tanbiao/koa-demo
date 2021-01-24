var DataTypes = require("sequelize").DataTypes;
var _Post = require("./post");
var _User = require("./user");

function initModels(sequelize) {
  var Post = _Post(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);


  return {
    Post,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
