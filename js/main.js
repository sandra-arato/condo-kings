var header;
var headerHeight;
var menu;
var menuHeight;
var menuPos;
var menuB;

function menuFlipper() {

	var scroll = $(window).scrollTop();
	var headerPos = $(header).offset();
	var headerBottom = headerPos.top + headerHeight - scroll;

	if (headerBottom <= menuB || headerBottom >= menuPos) {
		var diff = menuB - headerBottom ;
		var rect = "rect(0px, " + $(window).width() + "px, " + (menuHeight - diff) + "px, 0px)";
		$(menu).css("clip", rect);
	}
	else {
		if (headerBottom < menuPos) {
			$(menu).css("visibility", "hidden");
			console.log(scroll, headerHeight, menuPos)
		}
		else {
			$(menu).css("clip", "rect(0px, "+ $(window).width() + "px, " + menuHeight + "px, 0px)");
			$(menu).css("visibility", "visible");	
		}
	}
	
}


function smoothScroll () {
	$(function() {
		$("a[href*=#]:not([href=#])").click(function() {
			if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"") && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
				if (target.length) {
					$("html,body").animate({
						scrollTop: target.offset().top-80
					}, 800);
					return false;
				}
			}
		});
	});
}

function initialize() {
	header = $("header");
	$(header).height($(window).height());

	headerHeight = $(header).height();
	menu = $("div.nav");
	menuHeight = $(menu).height();
	menuPos = $(menu).position().top;
	menuB = menuHeight + menuPos;
	
	smoothScroll();
	$(window).scroll(menuFlipper);
	
}

$(document).ready(initialize);