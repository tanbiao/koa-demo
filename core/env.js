const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const file = ".env.local";
if (fs.existsSync(file)) {
    const envConfig = dotenv.parse(fs.readFileSync(file));
    for (const k in envConfig) {
        process.env[k] = envConfig[k];
    }
}


function env(key, defaultValue) {
    return process.env[key] !== undefined ? process.env[key] : defaultValue;
}

module.exports = env;
