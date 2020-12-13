const user = require('../controllers/user');
const Router = require('koa-router');

const router = new Router({
    prefix:"/user"
});

router.get("/",user.index);
router.get("/list",user.list);
router.post("/create",user.create);

module.exports = router;