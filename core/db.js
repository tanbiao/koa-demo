const dbConfig = require("../config/database");

const Sequelize = require("sequelize");
const logger = require('./log').logger;

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
        logQueryParameters:true,//绑定值写入到日志
        define: {
            charset: "utf8",
            dialectOptions: {
                collate: "utf8_general_ci",
            },
        },
        logging:(msg) => {
            logger.info("sql",msg);
            console.log(msg);
        }
    }
);

module.exports = sequelize;
