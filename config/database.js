module.exports = {
    production: {
        host: "localhost",
        port: 3306,
        username: "root",
        password: "root",
        database: "demo",
        dialect: "mysql",
        dialectOptions: {
            bigNumberStrings: true,
        },
        pool: {
            max: 5,
            min: 0,
            idle: 30000,
        },
    },
};
