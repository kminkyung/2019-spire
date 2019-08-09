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
	$(this).find(".navi-sub").stop().animate({"top":"-5rem"}, 100, function(){
			$(this).find(".line").stop().animate({"width":"90%"}, 300);
	});
});
$(".navi-top > li").mouseleave(function(){
	$(this).css("color", "white");
	$(this).find(".navi-sub").stop().animate({"top":"-23rem"}, 100, function(){
			$(this).find(".line").stop().animate({"width":0}, 500);
	});
});
// $(".navi-sub .sub-menu").hover(function(){
// 	$(this).find(".line").css({"height":"25px"});
// });

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

//data slide
var data = [
	{
	order: "01", 
	icon: "fa-ship",
	title: "MARITIME DATA", 
	desc: "Spire Maritime uses satellite \"AIS\" data and sophisticated APIs to provide maritime awareness solutions for vessel tracking, ship monitoring, and for viewing historic \"AIS\" data and predicted positions. We are doing more with the data you already use (like AIS). We are building intelligent machine-learning algorithms that predict vessel locations and ETAs. And we are finding new sources of useful maritime data (like advanced weather prediction methods).", 
	src: "../img/slide-1.jpg"
	},{
	order: "02",
	icon: "fa-plane",
	title: "AVIATION DATA",
	desc: "Despite how safe the skies are, there are still large regions of the Earth where aircraft fall completely off the radar. In the wake of the disappearance of Malaysia Airlines 370, there is a renewed sense of urgency to establish new methods of aircraft surveillance to fill those gaps. Space-based ADS-B is the only way to reliably track aircraft over remote regions. Spire’s data can identify, track, and predict global aircraft traffic 24/7, anywhere in the world.",
	src: "../img/slide-2.jpg"
	},{
	order: "03",
	icon: "fa-cloud",
	title: "WEATHER DATA",
	desc: "Demand for accurate weather data is increasing as more people and business around the world are more frequently impacted by severe weather. Adequate warning systems have never been more important. Spire has built the world’s first commercial radio occultation processing system that can deliver fast, reliable data that can save lives.",
	src: "../img/slide-3.jpg"
	}
];

var now = 0;
var end = data.length - 1;
var dir = "L";
var tar;
var cnt = 1;
var slideCnt = cnt + 2;
// var slideWid = (100/cnt).toFixed(4);
var speed	= 500;
var gap = 3000;
var arr = [];
var interval;

dataInit();
function dataInit() {
	for(var i=0, html=''; i<data.length; i++) {
		html += '<ul class="data-slides" style="">';
		html += '<li class="data-slide">';
		html += '<div class="data-label"><i class="fas '+data[i].icon+' mr-3"></i>MEET THE DATA</div>';
		html += '<div class="data-info d-flex py-4">';
		html += '<span class="data-index">'+data[i].order+'</span>';
		html += '<div class="data-tit">'+data[i].title+'</div>';
		html += '<div class="data-desc">'+data[i].desc+'</div>';
		html += '</div>';
		html += '</li>';
		html += '<li class="data-img position-relative mt-3">';
		html += '<img src="'+data[i].src+'" class="w-100">';
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
	}
	$(".data").append(html);
};

slideInit();
function slideInit() {
	if(now == 0) arr[0] = end;
	else arr[0] = now - 1;

	for(var i=0; i<cnt; i++) {
		if(i + now > end) arr[(i+1)] = i + now - end - 1;
		else arr[(i+1)] = now + i;
	}
	$(".data-slides").css("left", "0");
	if (dir == "L") {
		if(now == end) now = 0;
		else now++;
	}
};

function slideAni() {
	$(".data-slides").stop().animate({"left":"-100%"}, speed, slideInit);
}

interval = setInterval(slideAni, gap);