const redis = require("../core/redis");
const response_util = require("../util/response");

async function verifyToken(ctx, next) {
    if (!ctx.request.query.token) {
        ctx.body = response_util.error("请先登录");
        return;
    }
    const redisInfo = await redis.get(ctx.request.query.token);
    if (!redisInfo) {
        ctx.body = response_util.error("登录已过期，请重新登录");
        return;
    }
    ctx.user = JSON.parse(redisInfo);

    await next(); // 执行后代的代码
}

module.exports = verifyToken;
