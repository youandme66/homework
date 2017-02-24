var express       = require('express');
var router        = express.Router();
var itemCtrl      = require('./controllers/itemCtrl');
var adminCtrl     = require('./controllers/adminCtrl');
var auth          = require('./middlewares/auth');
//管理员登录
router.get('/admin/login',adminCtrl.getAdmin);
router.post('/admin/login',adminCtrl.loginAdmin);
router.post('/addHomework',itemCtrl.addHomework);
router.get('/homework',itemCtrl.getHomework);
module.exports = router;