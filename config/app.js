const env = require("../core/env");

module.exports = {
    port: env("PORT", 8080),
    logLevel:env("LOG_LEVEL","info")
};
