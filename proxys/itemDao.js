var Dao=require('./Dao');
var pool=new Dao();
exports.addHomework=function(item_params,callback){
	var sql="insert into homework(hcontent,ha,hb,hc,hd,he,htype,hexplain,hanswer) value(?,?,?,?,?,?,?,?,?);";
	pool.getConnection(function(err,connection){
		connection.connect();
		connection.query(sql,item_params,function(err,result){
			callback(err,result);
		});
		connection.release();
	});
};
exports.getHomework=function(callback){
	var sql="select * from homework  order by rand() limit 10";
	pool.getConnection(function(err,connection){
		connection.connect();
		connection.query(sql,function(err,result){
			callback(err,result);
		});
		connection.release();
	});
};