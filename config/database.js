const env = require("../core/env");

module.exports = {
    host: env("DB_HOST", "localhost"),
    port: env("DB_PORT", 3306),
    username: env("DB_USER", "root"),
    password: env("DB_PWD", "root"),
    database: env("DB_DBNAME", "demo"),
    dialect: env("DB_DIALECT", "mysql"),
    dialectOptions: {
        bigNumberStrings: true,
    },
    pool: {
        max: 5,
        min: 0,
        idle: 30000,
    },
};
