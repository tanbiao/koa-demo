const home = require('../controllers/home');
const Router = require('koa-router');
const cache = require("../utils/cache");

const router = new Router();

router.get("/",home.index);
router.get("/test",home.test);
router.get("/testDb",home.testDb);

module.exports = router;