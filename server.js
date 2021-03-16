const config = require("./config/app");
const Koa = require("koa");
const routers = require("./router/index");
const middleware = require("./middleware/index");

const app = new Koa(); //new Koa

middleware.loadMiddleware(app);

//引入路由
app.use(routers.routes(), routers.allowedMethods());

app.listen(config.port);
console.log(`the server is start at port ${config.port}`);

let a = 5;
let b = 45;

if (b > a) {
    if (b > a) {
        console.log("hello");
    }
}
