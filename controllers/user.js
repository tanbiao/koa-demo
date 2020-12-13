const { create } = require("domain");

const user = {
    async index(ctx) {
        ctx.body = "this is user index page";
    },

    async list(ctx) {
        ctx.body = " this is user list page";
    },

    async create(ctx) {
        const user =  ctx.request.body;
        ctx.body = user.name;
    }
};

module.exports = user;