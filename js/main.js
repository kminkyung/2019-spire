//navi-square 
$(".navi-square").click(function(){
	$(".navi-sqr").stop().animate({"right":0}, 300);
	$(this).css("visibility","hidden");
});
$(".sqr-exit > i").click(function(){
	$(".navi-sqr").stop().animate({"right":"-100%"}, 400, function(){
		$(".navi-square").css("visibility","visible");
	});
});

//navi-top
$(".navi-top > li").mouseenter(function(){
	if($(this).index() > 0) $(this).css("color", "black");
	$(this).find(".navi-sub").stop().animate({"top":"0"}, 200, function(){
			$(this).find(".line").stop().animate({"width":"90%"}, 200);
	});
});
$(".navi-top > li").mouseleave(function(){
	$(this).css("color", "white");
	$(this).find(".navi-sub").stop().animate({"top":"-330%"}, 200, function(){
			$(this).find(".line").stop().animate({"width":0}, 200);
	});
});
// $(".navi-sub .sub-menu").mouseenter(function(){
// 	if($(this).index() == 1) $(this).siblings(".line").stop().animate({"height":"25px"}, 100);
// 	else if ($(this).index() == 6);
// 	else $(this).children(".line").stop().animate({"height":"25px"}, 100);
// });
// $(".navi-sub .sub-menu").mouseleave(function(){
// 	if($(this).index() == 1) $(this).siblings(".line").stop().animate({"height":0}, 100);
// 	else $(this).children(".line").stop().animate({"height":0}, 100);
// });

// sidebar scroll event
var scrollChk = true;
$(window).scroll(scrollFn);
function scrollFn(){
	var scTop = $(this).scrollTop();
	if(scTop > 100) {
		if(scrollChk) {
			scrollChk = false;
			$(".side-black").stop().animate({"left": 0}, 1000);
			$(".navi-top").stop().animate({"top": "-100%"}, 1000);
		}
	}
	else {
		scrollChk = true;
		$(".side-black").stop().animate({"left": "-100%"}, 1000);
		$(".navi-top").stop().animate({"top": 0}, 1000);
	}
	// console.log(scTop);
}


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




//data slide
var data = [
	{
	order: "01", 
	icon: "<i class=\"fas fa-ship\"></i>",
	title: "MARITIME DATA", 
	desc: "Spire Maritime uses satellite \"AIS\" data and sophisticated APIs to provide maritime awareness solutions for vessel tracking, ship monitoring, and for viewing historic \"AIS\" data and predicted positions. We are doing more with the data you already use (like AIS). We are building intelligent machine-learning algorithms that predict vessel locations and ETAs. And we are finding new sources of useful maritime data (like advanced weather prediction methods).", 
	src: "../img/slide-1.jpg",
	pager: "pg-prog"
	},{
	order: "02",
	icon: "<i class=\"fas fa-plane\"></i>",
	title: "AVIATION DATA",
	desc: "Despite how safe the skies are, there are still large regions of the Earth where aircraft fall completely off the radar. In the wake of the disappearance of Malaysia Airlines 370, there is a renewed sense of urgency to establish new methods of aircraft surveillance to fill those gaps. Space-based ADS-B is the only way to reliably track aircraft over remote regions. Spire’s data can identify, track, and predict global aircraft traffic 24/7, anywhere in the world.",
	src: "../img/slide-2.jpg",
	pager: "pg-prog"
	},{
	order: "03",
	icon: "<i class=\"fas fa-cloud\"></i>",
	title: "WEATHER DATA",
	desc: "Demand for accurate weather data is increasing as more people and business around the world are more frequently impacted by severe weather. Adequate warning systems have never been more important. Spire has built the world’s first commercial radio occultation processing system that can deliver fast, reliable data that can save lives.",
	src: "../img/slide-3.jpg",
	pager: "pg-prog"
	}
];

var now = 0;
var end = data.length - 1;
var cnt = 2
var slideCnt = cnt + 2;
var speed	= 500;
var gap = 3000;
var arr = [];
var tar;
var interval;

init();
function init() {
	for(var i=0, html='', pgHtml=''; i<data.length; i++) {
		html += '<ul class="data-slides" style="">';
		html += '<li class="data-slide">';
		html += '<div class="data-label"><i class="data-icon mr-3"></i>MEET THE DATA</div>';
		html += '<div class="data-info d-flex py-4">';
		html += '<span class="data-index"></span>';
		html += '<div class="data-tit"></div>';
		html += '<div class="data-desc"></div>';
		html += '</div>';
		html += '</li>';
		html += '<li class="data-img position-relative mt-3">';
		html += '<img src="" class="w-100">';
		html += '<div class="data-btn">';
		html += '<button type="button" class="btn btn-explore">';
		html += '<span class="bt-text">EXPLORE DATA</span>';
		html += '<span class="btn-hover"></span></button>';
		html += '<button type="button" class="btn btn-sample">';
		html += '<span class="bt-text">SAMPLE DATA</span>';
		html += '<span class="btn-hover"></span>';
		html += '<i class="fas fa-arrow-down"></i></button>';
		html += '</li>';
		html += '</div>';
		html += '</ul>';
		pgHtml += '<li><span class="pg-prog"></span></li>';
	}
	$(".data").append(html);
	$(".data-pager").append(pgHtml);
	console.log(pgHtml);
};
// console.log(arr);

// $(".data").append($(".data > .data-slides").eq(0).clone());

dataInit();
function dataInit() {
	if(now == 0) arr[0] = end;
	else arr[0] = now - 1;

	for(var i=0; i<=cnt; i++) {
		if(i + now > end) arr[i+1] = now + i - end - 1;
		else arr[i+1] = now + i;
	} 

	for(var i=0; i<slideCnt; i++) {
		$(".data-slides").eq(i).find(".data-icon").html(data[arr[i]].icon);
		$(".data-slides").eq(i).find(".data-index").html(data[arr[i]].order);
		$(".data-slides").eq(i).find(".data-tit").html(data[arr[i]].title);
		$(".data-slides").eq(i).find(".data-desc").html(data[arr[i]].desc);
		$(".data-slides").eq(i).find("img").attr("src", data[arr[i]].src);
	}

	$(".data-slides").css("left", "-100%");

	for(var i=0; i < data.length; i++) {
		$(".data-pager > li").eq(i).text(data[i].order);
	}
} 
// data-pager progress bar
function pgAct() {
	$(this).stop().animate({"height":"4px"}, 100);
}
$(".data-pager > li").click(function(){
	$(this).find(".pg-prog").stop().animate({"height":"4px"}, 100);
});


slideAni();
function slideAni() {
	var pager = now + 1;
	if(now == end) {
		now = 0;
	}
	else {
		now++;
	}
	$(".data-slides").stop().animate({"left":"-200%"}, 1500, dataInit);
	$(".data-pager .pg-prog").eq(now).css({"height":"5px"}, 200);
	// console.log(now);
}


interval = setInterval(slideAni, gap);

// data button hover event
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

// read button hover event 
$(".btn-read").mouseenter(function(){
	$(this).find(".read-black").css({"display":"inline", "color":"black"});
	$(this).find(".read-white").css("display", "none");
	$(this).find(".read-hover").stop().animate({"height":"100%"}, 200)
});
$(".btn-read").mouseleave(function(){
	$(this).find(".read-black").css("display", "none");
	$(this).find(".read-white").css("display", "inline");
	$(this).find(".read-hover").stop().animate({"height":"1px"}, 200)
});



