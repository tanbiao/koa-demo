const Redis = require("ioredis");
const config = require('../config');

const redis = new Redis({
	port: config.redis.port, // Redis port
	host: config.redis.host, // Redis host
	password: config.redis.password,
	db: config.redis.db, 
	keyPrefix:config.redis.keyPrefix,
}); // uses defaults unless given configuration object
redis.on('error', function (error) {
	console.error('ioredis] client error: %s', error);
});
module.exports = redis;