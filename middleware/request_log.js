const requestLogger = require("../core/log").requestLogger;
const { v4: uuidv4 } = require("uuid");

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

    childLogger.info(request,{keywords:"request"});
    await next();
    childLogger.info(ctx.response.body,{keywords:"response"});
}

module.exports = requestLog;
