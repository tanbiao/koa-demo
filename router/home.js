const home = require("../controller/home");
const Router = require("koa-router");

const router = new Router();

router.get("/", home.index);
router.get("/test", home.test);
router.get("/testDb", home.testDb);
router.get("/list", home.list);
router.get("/create", home.create);
router.get("/find", home.find);

module.exports = router;
