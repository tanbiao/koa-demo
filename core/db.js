const config = require("../config")
const dbConfig = config.database
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.database, dbConfig.username,dbConfig.password, {
    host: dbConfig.host,
    port:dbConfig.port,
    dialect: 'mysql',
    operatorAliases: false,
    pool: dbConfig.pool || {
        max: 5,
        min: 0,
        idle: 30000
    },
    //解决中文输入问题
    define: {
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        }
    }
})

module.exports = sequelize;