//navi-square 
$("navi-square").click(function(){

});


// sidebar scroll event
$(window).scroll(function(){
	var scTop = $(this).scrollTop();
	if(scTop > 60) $(".side-black").stop().animate({"left": 0}, 1000);
	else $(".side-black").stop().animate({"left": "-100%"}, 1000);
	console.log(scTop);
});

//side-bar hover event
$(".side-bar").mouseenter(function(){
	$(this).stop().animate({"opacity":0, "height":"35%"}, 300);
	$(".side-clay").stop().animate({"opacity":1, "height":"35%"}, 300);
	$(".side-tit").stop().animate({"bottom":"210px"}, 300);
});
$(".side-bar").mouseleave(function(){
	$(this).stop().animate({"opacity":1, "height":"27%"}, 300);
	$(".side-clay").stop().animate({"opacity":0, "height":"27%"}, 300);
	$(".side-tit").stop().animate({"bottom":"250px"}, 300);
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

