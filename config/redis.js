const env = require("../core/env");

module.exports = {
    port: env("REDIS_PORT", 6379), // Redis port
    host: env("REDIS_HOST", "127.0.0.1"), // Redis host
    db: env("REDIS_DB_INDEX", 0),
    keyPrefix: env("REDIS_KEY_PREFIX", ""),
};
