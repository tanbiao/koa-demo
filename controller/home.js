const { index } = require("./user");
const userService = require("../service/user");

const redis = require("../core/redis");

const home = {
    async index(ctx) {
        ctx.body = "home page";
    },

    async test(ctx) {

        let test = await redis.get("test");
        
        redis.set("test",Math.random());
        if(test) {
            ctx.body = test;
        } else {
            ctx.body = "thi si " + await redis.get("test");
        }
    },

    async testDb(ctx) {
        let ret = await userService.findUser(ctx.request.query.id || 1);
        ctx.body = ret;
    }
};

module.exports = home;