const requestLogger = require("../core/log").requestLogger;
const { v4: uuidv4 } = require("uuid");

const createNamespace = require("continuation-local-storage").createNamespace;
const localStorage = createNamespace("localStorage");

async function requestLog(ctx, next) {
    let request = {
        method: ctx.request.method,
        url: ctx.url,
        get: ctx.request.query,
        ip: ctx.request.ip,
        post: ctx.request.body,
    };
    let requestId = uuidv4();
    const childLogger = requestLogger.child({ requestId: requestId });

    childLogger.info(request, { keywords: "request" });
    localStorage.active = ctx;
    localStorage.set("requestId", requestId);
    await next();
    childLogger.info(ctx.response.body, { keywords: "response" });
}

module.exports = requestLog;
