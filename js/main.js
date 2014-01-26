
var stickyON;

function stickyMenu () {
	$(window).scroll(function () {

		if (stickyON) {
			console.log("BAAAMMMMM");
			$("#top-link").click( function() {

				console.log("top clicked");
				// $("header").animate({
				// 	height: "765px",
				// 	bottom: "0",
				// 	scrollTop: 0
				// });
				// $(window).scrollTop(0);
				// $("header").css({
				// 	"position": "relative",
				// 	"margin-top": "0",
				// 	"z-index": "10000",
				// 	"background": "url('image/slide1.jpg') bottom no-repeat",
				// })
				// $("header div, header h1").css({
				// 	visibility: "visible",
				// 	height: "auto"
				// });
				// $("header nav").css("bottom", "-540px");
				// stickyMenu();
			})
			// smoothScroll();
			
		}

		else {
			console.log("now header height is", $("header").height());
			stickyON = false;
			if (!stickyON) {
				$("header").animate({
					height: "-=700px",
					bottom: "-=10px"
					// scrollTop: 0
				});
			}
				$(window).scrollTop(0);
				$("header").css({
					"position": "fixed",
					"z-index": "10000",
					"background": "#eeeeee"
				})
				$("header div, header h1").css({
					visibility: "hidden",
					height: "0"
				});
				$("header nav").css("bottom", "20px");
				stickyON = true;
				console.log(stickyON)
				return stickyON;
		}
	})
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
	smoothScroll();
	stickyMenu();
}

$(document).ready(initialize);