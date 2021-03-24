const Router = require("koa-router");
const user = require("./user");
const home = require("./home");
const userController = require("../controller/user");
const verifyToken = require("../middleware/verifyToken");

const router = new Router();
router.post("/login", userController.login);

router.use(verifyToken);
router.use(user.routes(), user.allowedMethods());
router.use(home.routes(), home.allowedMethods());

module.exports = router;
