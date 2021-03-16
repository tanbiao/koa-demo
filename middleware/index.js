const errorHandler = require("./error_handler");
const requestLog = require("./request_log");

const bodyparser = require("koa-bodyparser");

function loadMiddleware(app) {
    app.use(requestLog);
    app.use(bodyparser());
    app.use(errorHandler);
    return app;
}

module.exports = { loadMiddleware };
