var itemDao = require('../proxys/itemDao');
var validator = require('validator');
var eventproxy = require('eventproxy');
// 管理员界面
exports.getAdmin=function(req,res,next){
	res.render('adminLogin');
};
exports.loginAdmin=function(req,res,next){
	var password = validator.trim(req.body.admin);
	if(password=='123456'){
		res.render('addHomework');
	}else{
		res.render('error');
	}
};