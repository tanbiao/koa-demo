const home = require('../controller/home');
const Router = require('koa-router');
const redis = require("../core/redis");

const router = new Router();

router.get("/",home.index);
router.get("/test",home.test);
router.get("/testDb",home.testDb);

module.exports = router;