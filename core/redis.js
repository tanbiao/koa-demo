const Redis = require("ioredis");
const redisConfig = require("../config/redis");

const redis = new Redis({
    port: redisConfig.port, // Redis port
    host: redisConfig.host, // Redis host
    password: redisConfig.password,
    db: redisConfig.db,
    keyPrefix: redisConfig.keyPrefix,
}); // uses defaults unless given configuration object
redis.on("error", function (error) {});

module.exports = redis;
