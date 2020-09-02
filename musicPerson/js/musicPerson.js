$(function(){
	// new fullpage('#fullpage', {
	//     //navigation: true,
	//     //responsiveWidth: 700,
	//     anchors: ['home', 'about-us', 'contact'],
	//     parallax: true,
	//     onLeave: function(origin, destination, direction){
	//        console.log("Leaving section" + origin.index);
	//     },
	// });
	$('#fullpage').fullpage();
	// (function(){
	// 	function k(fn,wait){
	// 		var timer = null;
	// 		return function(){
	// 			var context = this;
	// 			if(!timer){
	// 				timer = setTimeout(function(){
	// 					fn.apply(context);
	// 					timer = null;
	// 				},wait)
	// 			}
	// 		}
	// 	}
		
	// 	function run(){
	// 		clearInterval(timer);
	// 		var height = $(window).height();
	// 		var timer = setInterval(function(){
	// 			let Top =$(document).scrollTop();
	// 			$(document).scrollTop(Top+(0.1*height));
	// 			if(Math.floor($(document).scrollTop())%height>=(height-40) || $(document).scrollTop()>=6*height){
	// 			}
	// 		},100)
	// 	}
	// 	$(window).on('scroll',k(run,500))
		
		// $(document).click(function(){
		// //$(document).scroll(function(){
		// 	clearInterval(timer);
		// 	var height = $(window).height();
		// 	var timer = setInterval(function(){
		// 		let Top =$(document).scrollTop();
		// 		$(document).scrollTop(Top+(0.1*height));
		// 		if(Math.floor($(document).scrollTop())%height>=(height-40) || $(document).scrollTop()>=6*height){
		// 			clearInterval(timer);
		// 			console.log($(document).scrollTop());
		// 			console.log(6*height);
		// 			console.log("height:"+height)
		// 		}
		// 	},100)
		// })
// 	})();
})