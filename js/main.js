//navi-square 
$(".navi-square").click(function(){
	$(".navi-sqr").stop().animate({"right":0}, 300);
});
$(".sqr-exit > i").click(function(){
	$(".navi-sqr").stop().animate({"right":"-100%"}, 300);
});

//navi-top
$(".navi-top > li").mouseenter(function(){
	$(this).css("color", "black");
	$(this).find(".navi-sub").stop().animate({"top":"-3rem"}, 100, function(){
			$(this).find(".line").stop().animate({"width":"100%"}, 300);
	});
});
$(".navi-top > li").mouseleave(function(){
	$(this).css("color", "white");
	$(this).find(".navi-sub").stop().animate({"top":"-23em"}, 100, function(){
			$(this).find(".line").stop().animate({"width":0}, 500);
	});
});

// sidebar scroll event
$(window).scroll(function(){
	var scTop = $(this).scrollTop();
	if(scTop > 100) {
		$(".side-black").stop().animate({"left": 0}, 1000);
		$(".navi-top").stop().animate({"top": "-100%"}, 1000);
	}
	else {
		$(".side-black").stop().animate({"left": "-100%"}, 1000);
		$(".navi-top").stop().animate({"top": 0}, 1000);
	}
	// console.log(scTop);
});

//side-bar hover event
$(".side-bar").mouseenter(function(){
	$(this).stop().animate({"opacity":0, "height":"35%"}, 200);
	$(".side-clay").stop().animate({"opacity":1, "height":"35%"}, 200);
	$(".side-tit").stop().animate({"bottom":"210px"}, 200);
});
$(".side-bar").mouseleave(function(){
	$(this).stop().animate({"opacity":1, "height":"27%"}, 200);
	$(".side-clay").stop().animate({"opacity":0, "height":"27%"}, 200);
	$(".side-tit").stop().animate({"bottom":"250px"}, 200);
});


// button hover event
$(".btn-explore").mouseenter(function(){
	$(this).find(".btn-hover").stop().animate({"height":"100%"}, 100);
});
$(".btn-sample").mouseenter(function(){
	$(this).css("color","white");
	$(this).find(".btn-hover").stop().animate({"height":"100%"}, 100);
});
$(".btn-explore").mouseleave(function(){
	$(this).find(".btn-hover").stop().animate({"height":0}, 100);
});
$(".btn-sample").mouseleave(function(){
	$(this).css("color","black");
	$(this).find(".btn-hover").stop().animate({"height":0}, 100);
});

