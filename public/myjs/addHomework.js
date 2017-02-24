$(document).ready(function(){
	$('#sub').click(function(){
		var hcontent=$("#hcontent").val();
		var htype=$("input[name='check']:checked").val();
		var ha = $("#ha").val();
		var hb = $("#hb").val();
		var hc = $("#hc").val();
		var hd = $("#hd").val();
		var he = $("#he").val();
		var hanswer = $("#answer").val();
		var hexplain = $("#hexplain").val();
		$.ajax({
			cache:true,
			type:"POST",
			url:"/addHomework",
			data:{hcontent:hcontent,htype:htype,ha:ha,hb:hb,hc:hc,hd:hd,he:he,hanswer:hanswer,hexplain:hexplain},
			success:function(data){
				if(data.code==-20){
					alert(data.msg);
				}else{
					alert(data.msg);
					window.location("localhost:3000/addHomework");
				}
			}
		});
	});
});