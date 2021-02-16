const env = require("../core/env");

module.exports = {
    port: env("PORT", 8080),
};
