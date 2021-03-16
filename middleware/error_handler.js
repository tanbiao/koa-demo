const errorLogger = require("../core/log").errorLogger;
const createNamespace = require("continuation-local-storage").createNamespace;
const localStorage = createNamespace("localStorage");

async function errorHandler(ctx, next) {
    try {
        await next(); // 执行后代的代码
        if (!ctx.body) {
            // 没有资源
            ctx.status = 404;
            ctx.body = "页面不存在";
        }
    } catch (err) {
        // 如果后面的代码报错 返回500
        ctx.status = 500;
        console.log(err);
        localStorage.active = ctx;
        errorLogger
            .child({ requestId: localStorage.get("requestId") })
            .error("", err);
        ctx.body = "服务器内部错误";
    }
}

module.exports = errorHandler;
