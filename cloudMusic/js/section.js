// // var $ = function(arg){
// // 	return window.document.querySelector(arg);
// // }
// //轮播图
// (function (){
// 	var $ = function(arg){
// 		return window.document.querySelector(arg);
// 	}
// 	// 轮播图点击图片转动；
// 	var btnL = $('#left');//左箭头
// 	var btnR = $('#right');//右箭头
// 	var img = $('#p-img');//获取图片
// 	var bkColor = $('#color-change');//获取底层更改背景的元素
// 	var point = $('#fc');//获取设置红点的列表ul
// 	var points = point.children;
	var a=0;//为图片变化设置标志；
	var changeColor='';//变化的颜色；
	var changeImg='';//图片的变化；
	var change = function (){
		if(a==0){
			changeColor = '#000';
			changeImg = './img/section/focus.jpg';
		}else if(a==1){
			changeColor = 'rgb(222,216,200)';
			changeImg = './img/section/img1.jpg';
		}else if(a==2){
			changeColor = 'rgb(230,228,231)';
			changeImg = './img/section/img2.jpg';
		}else if(a==3){
			changeColor = '#000';
			changeImg = './img/section/img3.jpg';
		}else if(a==4){
			changeColor = 'rgb(84,149,149)';
			changeImg = './img/section/img4.jpg';
		}else if(a==5){
			changeColor = 'rgb(29,80,138)';
			changeImg = './img/section/img5.jpg';
		}else if(a==6){
			changeColor = 'rgb(40,7,2)';
			changeImg = './img/section/img6.jpg';
		}
	}
	
// 	// 消除一个点以外的其他点的不变化
// 	var notChange = function(){
// 		for(let n=0;n<=6;n++){
// 			if(n!=a){
// 				points[n].className = 'inblock change-beginpoint';
// 			}
// 		}
// 	}
// 	// 向左滚动
// 	var change_left = function (){
// 		a-=1;
// 		if(a==-1){
// 			a=6;
// 		}
// 		change();
// 		img.src = changeImg;
// 		bkColor.style.backgroundColor = changeColor;
// 		notChange();
// 		points[a].className = 'inblock change-red-point';
// 	}
// 	//向右滚动
// 	var change_right = function(){
// 		a+=1;
// 		if(a==7){
// 			a=0;
// 		}
// 		change();
// 		img.src = changeImg;
// 		bkColor.style.backgroundColor = changeColor;
// 		notChange();
// 		points[a].className = 'inblock change-red-point';
// 	}
// 	btnR.onclick = change_right;
// 	btnL.onclick = change_left;
// 	// 设置定时自动虚化转换下一图片
	
// 	//轮播图的自动更换图片
// 	var timer1 = setInterval(function(){
// 		// var timer2 = setInterval(function(){
// 		// 	img.style.opacity -= 10;
// 		// 	console.log(img.style.opacity);
// 		// 	if(img.style.opacity==1){
// 		// 		clearInterval(timer2);
// 		// 	}
// 		// },50);
// 		change_right();
// 	},3000)
	
// 	//设置鼠标悬停清除定时器
// 	img.onmouseover = function (){
// 		clearInterval(timer1);
// 	}
// 	//鼠标移除恢复定时器
// 	img.onmouseout = function (){
// 		timer1 = setInterval(function(){
// 			change_right();
// 		},3000)
// 	}
	
// 	for( let k=0;k<=6;k++){
// 		// 小点的触摸效果
// 		points[k].onmouseover = function (){
// 			for(let m=0;m<=6;m++){
// 				points[k].className = 'inblock change-red-point';
// 				if(m!=k && m!=a){
// 					// change_redpoint();
// 					// console.log(k);
// 					points[m].className = 'inblock change-beginpoint';
// 				}
// 			}
// 		}
		
// 		points[k].onmouseout = function (){
// 			for(let m=0;m<=6;m++){
// 				if(m!=a){
// 					points[m].className = 'inblock change-beginpoint';
// 				}
// 			}
// 		}
// 		//小点的点击效果;
// 		points[k].onclick = function(){
// 			for(let m=0;m<=6;m++){
// 				a=k;
// 				change();
// 				img.src = changeImg;
// 				bkColor.style.backgroundColor = changeColor;
// 				points[k].className = 'inblock change-red-point';
// 				if(m!=k){
// 					points[m].className = 'inblock change-beginpoint';
// 				}
// 			}
// 		}
// 	}
// })();


// // 榜单处播放三个按钮的显示
// (function(){
// 	var $ = function(arg){
// 		return window.document.querySelector(arg);
// 	}
// 	var li1 = $('#List-ol1').children;//li标签
// 	var li2 = $('#List-ol2').children;//li标签
// 	var li3 = $('#List-ol3').children;//li标签
// 	var small_pic = document.querySelectorAll('#small-pic');//a小图标
// 	var lis = [];
// 	var new_li1 = Array.from(li1);//ES6语法
// 	var new_li2 = Array.from(li2);
// 	var new_li3 = Array.from(li3);
// 	//循环遍历将三个数组中的内容转移到一个数组当中
// 	for(var b=0;b < new_li1.length-1;b++){
// 		lis.push(new_li1[b]);
// 	}
// 	for(var c=0;c < new_li2.length-1;c++){
// 		lis.push(new_li2[c]);
// 	}
// 	for(var d=0;d < new_li3.length-1;d++){
// 		lis.push(new_li3[d]);
// 	}
// 	for(let v=0;v<lis.length;v++){
// 		lis[v].onmouseover = function (){
// 			small_pic[v].style.display = 'block';
// 		}
// 		lis[v].onmouseout = function (){
// 			small_pic[v].style.display = 'none';
// 		}
// 	}
// })();

// // 返回顶部按钮
// (function(){
// 	var $ = function(arg){
// 		return window.document.querySelector(arg);
// 	}
// 	// 滚动条滚动时显示，滚动条为0时消失
// 	var backTop = $('#backtop');
// 	window.onscroll = function(){
// 		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
// 		backTop.style.display = 'block';
// 		if(scrollTop==0){
// 			backTop.style.display = 'none';
// 		}
// 	}
	
// 	//为返回顶部按钮设置点击事件
// 	backTop.onclick = function (){
// 		document.documentElement.scorllTop = 0;
// 	}
// })();

// //下方小轮播
// (function(){
// 	var $ = function(arg){
// 		return window.document.querySelector(arg);
// 	}
// 	// DVD-List DVD新碟处轮播图;
// 	var DVD_lis = $('#DVD-List').children;
// 	var D_left = $('#D-left');
// 	var D_right = $('#D-right');
// 	//初始属性的设置
// 	DVD_lis[0].style.left = '-645px';
// 	DVD_lis[0].style.display = 'none';
// 	DVD_lis[1].style.left = '0px';
// 	DVD_lis[2].style.left = '645px';
// 	DVD_lis[2].style.display = 'none';
// 	DVD_lis[3].style.left = '1290px';
// 	DVD_lis[3].style.display = 'none';
// 	// 给左箭头设置点击事件；
// 	D_left.onclick = function (){
// 		for(var g=0;g<DVD_lis.length;g++){
// 			DVD_lis[g].style.left = (parseInt(DVD_lis[g].style.left)-645) +'px';
// 			if(parseInt(DVD_lis[g].style.left)<-645){
// 				DVD_lis[g].style.left = 1290 +'px'
// 			}else if(parseInt(DVD_lis[g].style.left)==0){
// 				DVD_lis[g].style.display = 'block';
// 				for(var p=0;p<DVD_lis.length;p++){
// 					if(p!=g){
// 						DVD_lis[p].style.display = 'none';
// 					}
// 				}
// 			}
// 		}
// 	}
// 	//右箭头滚动点击事件；
// 	D_right.onclick = function (){
// 		for(var g=0;g<DVD_lis.length;g++){
// 			// DVD_lis[g].style.transition = 'left 0.5s ease-out';
// 			// DVD_lis[g+1].style.transition = 'left 0.5s ease-out';
// 			DVD_lis[g].style.left = (parseInt(DVD_lis[g].style.left)+645) +'px';
// 			if(parseInt(DVD_lis[g].style.left)>1290){
// 				DVD_lis[g].style.left = -645 +'px'
// 			}else if(parseInt(DVD_lis[g].style.left)==0){
// 				DVD_lis[g].style.display = 'block';
// 				for(var p=0;p<DVD_lis.length;p++){
// 					if(p!=g){
// 						DVD_lis[p].style.display = 'none';
// 					}
// 				}
// 			}
// 		}
// 	}
// })();


// jquery版本

;(function (){
	//图片向右跳转
	var change_right = function (){
		a+=1;
		if(a==7){
			a=0;
		}
		change();
		$('#p-img').attr('src',changeImg);
		$('#color-change').css('background-color',changeColor);
		$('#fc').children().eq(a).addClass('inblock change-red-point').removeClass('change-beginpoint')
							.siblings().removeClass('change-red-point').addClass('change-beginpoint');
	}
	//图片向左跳转
	var change_left = function(){
		a-=1;
		if(a==-1){
			a=6;
		}
		change();
		$('#p-img').attr('src',changeImg);
		$('#color-change').css('background-color',changeColor);
		$('#fc').children().eq(a).addClass('inblock change-red-point').removeClass('change-beginpoint')
							.siblings().removeClass('change-red-point').addClass('change-beginpoint');
							//当前小点变红，兄弟小点变回去
	}
	// 轮播图左箭头设置；
	$('#left').click(function(){
		change_left();
	})
	//轮播图右箭头设置
	$('#right').click(function(){
		change_right();
	})
	//轮播图的自动更换图片
	var timer1 = setInterval(function(){
		change_right();
	},3000)
	//设置鼠标悬停清除定时器
	$('#p-img').mouseover(function (){
		clearInterval(timer1);
	})
	//鼠标移除恢复定时器
	$('#p-img').mouseout(function(){
		timer1 = setInterval(function(){
			change_right();
		},3000)
	})

	// 小点的触摸效果
	$('#fc').children().mouseover(function(){
		$(this).addClass('inblock change-red-point').removeClass('change-beginpoint');
		$('#fc').children().eq(a).addClass('inblock change-red-point')
				.removeClass('change-beginpoint');//使原本的红点不因触摸而发生改变
	});
	$('#fc').children().mouseout(function(){
		$(this).removeClass('change-red-point').addClass('change-beginpoint');
	})
	//小点的点击事件
	$('#fc').children().click(function(){
		//当前小点变红，兄弟小点变回去
		a=$('#fc').children().index($(this));
		change();//判断a找到对应的图片和颜色
		$('#p-img').attr('src',changeImg);//设置图片
		$('#color-change').css('background-color',changeColor);//设置颜色
		$(this).removeClass('change-beginpoint').addClass('change-red-point')
				.siblings().removeClass('change-red-point').addClass('change-beginpoint');//小点的颜色设置
	})
})();
// 榜单处播放三个按钮的显示
(function(){
	var small_pic = document.querySelectorAll('#small-pic');
	var li1 = $('#List-ol1').children();//li标签
	var li2 = $('#List-ol2').children();//li标签
	var li3 = $('#List-ol3').children();//li标签
	var lis = [];
	var new_li1 = Array.from(li1);//ES6语法
	var new_li2 = Array.from(li2);
	var new_li3 = Array.from(li3);
	//循环遍历将三个数组中的内容转移到一个数组当中
	for(var b=0;b < new_li1.length-1;b++){
		lis.push(new_li1[b]);
	}
	for(var c=0;c < new_li2.length-1;c++){
		lis.push(new_li2[c]);
	}
	for(var d=0;d < new_li3.length-1;d++){
		lis.push(new_li3[d]);
	}
	for(let v=0;v<lis.length;v++){
		$(lis[v]).mouseover(function (){
			//$('#small-pic').eq(v).css('display','block');//a小图标显示或者隐藏
			small_pic[v].style.display = 'block';
		})
		$(lis[v]).mouseout(function (){
			//$('#small-pic').eq(v).css('display','none');
			small_pic[v].style.display = 'none';
		})
	}
})();


//返回顶部按钮
(function (){
	// 滚动条滚动时显示，滚动条为0时消失
	$(window).scroll(function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		$('#backtop').css('display','block');
		if(scrollTop==0){
			$('#backtop').css('display','none');
		}
	})
	//为返回顶部按钮设置点击事件
	$('#backtop').click(function(){
		document.documentElement.scorllTop = 0;
	})

})();

(function(){
	//初始属性的设置
	var DVD_lis = $('#DVD-List').children();
	DVD_lis.eq(0).css({
		'left':'-645px',
		'display':'none'
	});
	DVD_lis.eq(1).css({
		'left':'0px',
	});
	DVD_lis.eq(2).css({
		'left':'645px',
		'display':'none'
	});
	DVD_lis.eq(3).css({
		'left':'1290px',
		'display':'none'
	});
	// 给左箭头设置点击事件；
	$('#D-left').click(function(){
		for(var g=0;g<DVD_lis.length;g++){
			DVD_lis.eq(g).css('left',`${(parseInt(DVD_lis.eq(g).css('left'))-645)}px`)
			if(parseInt(DVD_lis.eq(g).css('left'))<-645){
				DVD_lis.eq(g).css('left','1290px');
			}else if(parseInt(DVD_lis.eq(g).css('left'))==0){
				DVD_lis.eq(g).css('display','block').siblings().css('display','none');
				
			}
		}
	})
	// 	//右箭头滚动点击事件；
	$('#D-right').click(function(){
		for(var g=0;g<DVD_lis.length;g++){
			DVD_lis.eq(g).css('left',`${(parseInt(DVD_lis.eq(g).css('left'))+645)}px`)
			if(parseInt(DVD_lis.eq(g).css('left'))>1290){
				DVD_lis.eq(g).css('left','-645px');
			}else if(parseInt(DVD_lis.eq(g).css('left'))==0){
				DVD_lis.eq(g).css('display','block').siblings().css('display','none');
			}
		}
	})
})();

