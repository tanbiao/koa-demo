const userService = require("../service/user");

const redis = require("../core/redis");
const logger = require('../core/log').logger;

const home = {
    async index(ctx) {
        ctx.body = ctx.request.body;
        logger.debug('debug关键字',ctx.request.query);
        logger.info('info关键字',ctx.request.query);
        logger.warn('warn关键字',ctx.request.query);
        logger.error('error关键字',ctx.request.query);
    },

    async test(ctx) {
        let test = await redis.get("test");

        redis.set("test", Math.random());
        if (test) {
            ctx.body = test;
        } else {
            ctx.body = "thi si " + (await redis.get("test"));
        }
    },

    async testDb(ctx) {
        let ret = await userService.findUser(ctx.request.query.id || 1);
        ctx.body = ret;
    },

    async list(ctx) {
        let list = await userService.findAll();
        ctx.body = list;
    },

    async create(ctx) {
        let data = await userService.create({ Name: "范晓杰", Status: "32" });
        ctx.body = data;
    },

    async find(ctx) {
        let data = await userService.find(ctx.request.query.id);
        data.lastName = "hello";
        data.save();
        ctx.body = data;
    },
};

module.exports = home;
