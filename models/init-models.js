var DataTypes = require("sequelize").DataTypes;
var _Migration = require("./migration");
var _Sequelizemetum = require("./sequelizemetum");
var _User = require("./user");

function initModels(sequelize) {
    var Migration = _Migration(sequelize, DataTypes);
    var Sequelizemetum = _Sequelizemetum(sequelize, DataTypes);
    var User = _User(sequelize, DataTypes);

    return {
        Migration,
        Sequelizemetum,
        User,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
