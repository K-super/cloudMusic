// 设置登陆处的触摸显示
(function (){
	// var user = $('#user');
	// var load = $('#loading');//隐藏的下拉框
	// var user_h = $('#user-h');//i标签
	// user.onmouseover = function(){  //鼠标从登陆移入
	// 	load.style.display = 'block';
	// 	user_h.style.display = 'block';
	// }
	// user_h.onmouseover = function(){	//鼠标从i标签移入
	// 	load.style.display = 'block';
	// }
	// user.onmouseout = function(){	//鼠标从登陆移出
	// 	load.style.display = 'none';
	// 	user_h.style.display = 'none'
	// }
	// load.onmouseout = function(){	//鼠标从下拉框移出
	// 	load.style.display = 'none';
	// 	user_h.style.display = 'none'
	// }
	
	// jquery版本
	$('#user').mouseover(function(){
		$('#loading').css('display','block');
		$('#user-h').css('display','block');
	})
	$('#user-h').mouseover(function(){
		$('#loading').css('display','block');
	})
	$('#user').mouseout(function(){
		$('#loading').css('display','none');
		$('#user-h').css('display','none');
	})
	$('#loading').mouseout(function(){
		$('#loading').css('display','none');
		$('#user-h').css('display','none');
	})
})();

//input 焦点获取事件
(function(){
	// var $ = function(arg){
	// 	return document.querySelector(arg);
	// }
	// var inp_hid = $('#inp-hid'); //需要显示的div
	// var search = $('#search'); //需要添加事件的input元素
	// var show = function(){
	// 	inp_hid.style.display = 'block';
	// }
	// var hidden = function(){
	// 	inp_hid.style.display = 'none';
	// }
	// search.addEventListener('blur',hidden,false);//添加事件监听，得到焦点和失去焦点
	// search.addEventListener('focus',show,false);
	
	// jquery版本
	$('#search').on('blur',function(){
		$('#inp-hid').css('display','none');
	});
	$('#search').on('focus',function(){
		$('#inp-hid').css('display','block');
	});
	
})();
