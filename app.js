const config = require('./config.js');
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const routers = require('./router/index');

const app = new Koa();//new Koa
//引入中间件
app.use(bodyparser());
app.use(async (ctx, next)=>{
    try{
        await next();   // 执行后代的代码
        if(!ctx.body){  // 没有资源
            ctx.status = 404;
            ctx.body = "页面不存在"
        }
    }catch(e){
        // 如果后面的代码报错 返回500
        ctx.status = 500;
        console.log(e);
        ctx.body = "服务器内部错误"
    }
})

//引入路由
app.use(routers.routes(),routers.allowedMethods());

app.listen(config.port);
console.log(`the server is start at port ${config.port}`)


