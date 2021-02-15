const Router = require("koa-router");
const user = require("./user");
const home = require("./home");

const router = new Router();
router.use(user.routes(), user.allowedMethods());
router.use(home.routes(), home.allowedMethods());

module.exports = router;
