
//轮播图
// (function(){
// 	var $ = function(arg){
// 		return document.querySelector(arg);
// 	}
// 	// banner 轮播图左箭头
// 	var goLeft = $('#goLeft');
// 	var goRight = $('#goRight');
// 	var banner = $('#banner');//控制底层颜色
// 	var as = $('#dots').children;//小点
// 	var banner_ul = $('#ban-ul');
// 	var lis =$('#ban-ul').children;
// 	var num = 0;
// 	var bkColor;//banner的背景颜色
	
// 	var change_picture = function(){
// 		if(num==0){
// 			bkColor = 'rgb(246,192,69)';
// 		}else if(num==1){
// 			bkColor = 'rgb(241,236,222)';
// 		}else if(num==2){
// 			bkColor = '#fff';
// 		}else if(num==3){
// 			bkColor = 'rgb(12,12,14)';
// 		}else if(num==4){
// 			bkColor = 'rgb(220,111,75)';
// 		}else if(num==5){
// 			bkColor = 'rgb(242,174,73)';
// 		}
// 	}
	
// 	var right = function(){
// 		num++;
// 		for(var k=0;k<=num;k++){	//排异，设置除自己以外的所有属性为空
// 			if(k!=num){
// 				lis[k].className='';
// 				as[k].className= '';
// 			}
// 		}
// 		if(num==6){//范围判断超出第一位则设置为最后一位
// 			num=0;
// 		}
// 		change_picture();
// 		banner.style.backgroundColor = bkColor; 	//背景图片的转换
// 		lis[num].className = 'show-pic';	//li图片的显示
// 		as[num].className = 'add_bkDots';	//小点白转红
// 	}
	
// 	var left = function (){
// 		num--;
// 		if(num==-1){
// 			num=5;
// 		}
// 		change_picture();
// 		banner.style.backgroundColor = bkColor;
// 		lis[num].className = 'show-pic';	//列表li的显示和隐藏
// 		as[num].className = 'add_bkDots';	//小点白转红
// 		for(var k=0;k<6;k++){	//排异，设置除自己以外的所有属性为空
// 			if(k!=num){
// 				lis[k].className='';
// 				as[k].className = '';
// 			}
// 		}
// 	}
	
// 	goRight.onclick = right;
// 	//轮播图右箭头
// 	goLeft.onclick = left;
	
// 	// 轮播图的自由滚动，默认向右滚动，间隔三秒；
// 	var timer = setInterval(function(){
// 		right();
// 	},3000)
// 	// 鼠标放上图停止转动 
// 	banner_ul.onmouseover = function(){
// 		clearInterval(timer);
// 	}
// 	// 鼠标移开图片继续转动；
// 	banner_ul.onmouseout = function(){
// 		timer = setInterval(function(){
// 			right();
// 		},3000)
// 	}
// 	//dots小点的点击换图事件；
// 	for(let h=0;h<lis.length;h++){
// 		as[h].onclick = function (){
// 			num=h;
// 			change_picture();
// 			banner.style.backgroundColor = bkColor;
// 			lis[h].className = 'show-pic';	//列表li的显示和隐藏
// 			as[h].className = 'add_bkDots';	//小点白转红
// 			for(var a=0;a<6;a++){	//排异，设置除自己以外的所有属性为空
// 				if(a!=h){
// 					lis[a].className='';
// 					as[a].className ='';
// 				}
// 			}
// 		}
// 	}
// })();


// // 设置section右侧top返回顶部
// (function(){
// 	var $ = function(arg){
// 		return document.querySelector(arg);
// 	}
// 	//点击top按钮实现返回顶部效果
// 	var returnTop = $('#returnTop');
// 	var Top = function(){
// 		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
// 		if(scrollTop>0){
// 			var timer;
// 			clearInterval(timer);
// 			timer = setInterval(function(){
// 				document.documentElement.scrollTop -= 100;
// 				if(document.documentElement.scrollTop<=0){
// 					clearInterval(timer);
// 				}
// 			},10);
// 			// document.documentElement.scrollTop = 0;
// 		}
// 	}
// 	//滚动滚动条实现nav固定于页面；
// 	var fixed = function(){
// 		var navRight = $('#navRight');
// 		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
// 		if(scrollTop>350){
// 			navRight.style.position = 'fixed';
// 			navRight.style.top = '50%';
// 		}else{
// 			navRight.style.position = 'absolute';
// 			navRight.style.top = '740px';
// 		}
// 	}
// 	// 添加事件监听
// 	returnTop.addEventListener('click',Top,false);
// 	document.addEventListener('scroll',fixed,false);
// })();

// jquery版本
(function(){
	//轮播图
	var $as = $('#dots').children();//小点
	var $lis =$('#ban-ul').children();
	var num = 0;
	var bkColor;//banner的背景颜色
		
	var change_picture = function(){
		if(num==0){
			bkColor = 'rgb(246,192,69)';
		}else if(num==1){
			bkColor = 'rgb(241,236,222)';
		}else if(num==2){
			bkColor = '#fff';
		}else if(num==3){
			bkColor = 'rgb(12,12,14)';
		}else if(num==4){
			bkColor = 'rgb(220,111,75)';
		}else if(num==5){
			bkColor = 'rgb(242,174,73)';
		}
	}
		
	var right = function(){
		num++;
		for(var k=0;k<=num;k++){	//排异，设置除自己以外的所有属性为空
			if(k!=num){
				$lis.eq(k).removeClass();
				$as.eq(k).removeClass();
			}
		}
		if(num==6){//范围判断超出第一位则设置为最后一位
			num=0;
		}
		change_picture();
		$('#banner').css('background-color',bkColor);//背景图片的转换
		$lis.eq(num).addClass('show-pic').siblings().removeClass();	//li图片的显示
		$as.eq(num).addClass('add_bkDots').siblings().removeClass();	//小点白转红
	}
	var left = function (){
		num--;
		if(num==-1){
			num=5;
		}
		change_picture();
		$('#banner').css('background-color',bkColor);//背景图片的转换
		$lis.eq(num).addClass('show-pic').siblings().removeClass();	//li图片的显示
		$as.eq(num).addClass('add_bkDots').siblings().removeClass();	//小点白转红
	}
	$('#goRight').click(right);
	$('#goLeft').click(left);
	
	// 轮播图的自由滚动，默认向右滚动，间隔三秒；
	var timer1 = setInterval(function(){
		right();
	},3000)
	// 鼠标放上图停止转动 
	$('#ban-ul').mouseover(function(){
		clearInterval(timer1);
	})
	// 鼠标移开图片继续转动；
	$('#ban-ul').mouseout(function(){
		timer1 = setInterval(function(){
			right();
		},3000)
	});
	//dots小点的点击换图事件；
	$as.click(function(){
		num = $(this).index();
		change_picture();
		$('#banner').css('background-color',bkColor);
		$lis.eq(num).addClass('show-pic').siblings().removeClass();	//li图片的显示
		$as.eq(num).addClass('add_bkDots').siblings().removeClass();	//小点白转红
	})
	
})();


(function(){
	// 设置section右侧top返回顶部
	//点击top按钮实现返回顶部效果
	var Top = function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop>0){
			var timer,top;
			clearInterval(timer);
			timer = setInterval(function(){
				//document.documentElement.scrollTop -= 100;
				top = $(document).scrollTop();
				$(document).scrollTop(top-100);
				if($(document).scrollTop() <=0){
					clearInterval(timer);
				}
			},10);
		}
	}
	$('#returnTop').on('click',Top);//绑定事件

	//滚动滚动条实现nav固定于页面；
	var fixed = function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop>350){
			$('#navRight').css({
				'position':'fixed',
				'top':'50%'
			})
		}else{
			$('#navRight').css({
				'position':'absolute',
				'top':'740px'
			})
		}
	}
	$(document).on('scroll',fixed);//绑定事件
})();



