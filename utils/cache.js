const Redis = require("ioredis");
const config = require('../config');

function redis() {
    const redis = new Redis({
        port: config.redis.port, // Redis port
        host: config.redis.host, // Redis host
        password: config.redis.password,
        db: config.redis.db, 
        keyPrefix:config.redis.keyPrefix,
    }); // uses defaults unless given configuration object
    return redis;
}

const cache = {
    getClient() {
        return redis();
    }
}

module.exports = cache;