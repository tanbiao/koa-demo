const response_util = require('../util/response');
const userService = require('../service/user');

const user = {
    async index(ctx) {
        ctx.body = response_util.success("this is user index page");
    },

    async list(ctx) {
        ctx.body = response_util.success("this is user list page");
    },

    async create(ctx) {
        const user = ctx.request.body;
        const data = await userService.create(user);
        ctx.body = response_util.success(data);
    },
};

module.exports = user;
