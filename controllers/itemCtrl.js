var itemDao = require('../proxys/itemDao');
var validator = require('validator');
var eventproxy = require('eventproxy');
//添加题目
exports.addHomework=function(req,res,next){
	var hcontent=req.body.hcontent;
	var ha = req.body.ha;
	var hb = req.body.hb;
	var hc = req.body.hc;
	var hd = req.body.hd;
	var he = req.body.he;
	var htype = req.body.htype;
	var hexplain = req.body.hexplain;
	var hanswer = req.body.hanswer;
	var params = [hcontent,ha,hb,hc,hd,he,htype,hexplain,hanswer];
	itemDao.addHomework(params,function(err,result){
		if (err) {
			console.log(err);
			if (err.errno == 1452) {
				return res.json({
					code: -20,
					msg: '请不要进行非法操作'
				});
			} else {
				return res.json({
					code: -20,
					msg: '添加题目失败'
				});
			}
		} else if (result.affectedRows > 0) {
			return res.json({
				code: 20,
				msg: '添加题目成功'
			});
		} else {
			return res.json({
				code: -20,
				msg: '未知错误，请重新提交'
			});
		}
	});
};
exports.getHomework=function(req,res,next){
	itemDao.getHomework(function(err,result){
		res.render('Homework',{supplies:result});
	});
};