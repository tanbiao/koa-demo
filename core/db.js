const appConfig = require("../config/app");
const DBConfigObject = require("../config/database");

const Sequelize = require("sequelize");

const dbConfig = DBConfigObject[appConfig.environment];

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        port: dbConfig.port,
        dialect: dbConfig.dialect,
        dialectOptions: dbConfig.dialectOptions || { bigNumberStrings: true },
        operatorAliases: false,
        pool: dbConfig.pool || {
            max: 5,
            min: 0,
            idle: 30000,
        },
        //解决中文输入问题
        define: {
            charset: "utf8",
            dialectOptions: {
                collate: "utf8_general_ci",
            },
        },
    }
);

module.exports = sequelize;
