$(document).ready(function() {

	$( ".cross" ).hide();
	$( ".hamburger-menu").hide();
	console.log("hello world");
	$( ".hamburger").click(function() {
		$(".hamburger-menu").slideToggle("slow",function() {
			$( ".hamburger").hide();
			$( ".cross").show();
		});
	});

	$( ".cross").click(function() {
		$(".hamburger-menu").slideToggle("slow", function() {
			$(".cross").hide();
			$(".hamburger").show();
		});
	})

	

	



	$(function() {
		$("#btnClose").click(function(evt) {
		  $("#dvNotify").slideUp('slow');
		});
		$("#btnShow").click(function(evt) {
		  $("#dvNotify").slideDown('slow');
		});
	  })



$(function() {
    $('body').removeClass('fade-out');
})



var navbar = document.getElementById("work-nav");
var category = navbar.getElementsByClassName("worknavbar");



var selector = '#work-nav a';

$(selector).on('click', function() {
	$(selector).removeClass('active');
	$(this).addClass('active');
})

//nav menu

//buttons

var Main = document.getElementById('main');
var Other = document.getElementById('other');
var Sketchbook = document.getElementById('sketchbook');


//pages 
var MainPage = document.getElementById('all-work-list');
var OtherPage = document.getElementById('other_page');
var SketchbookPage = document.getElementById('sketchbook_page');


//MAIN TRIGGER



$(Main).click(function() {

	MainPage.style.visibility = "visible";
	MainPage.style.left = "18%";
	$("#all-work-list").removeClass('away').addClass('return');
	OtherPage.style.visibility = "hidden";
	OtherPage.style.left = "100%";
	$("#other_page").removeClass('return').addClass('away');
	SketchbookPage.style.visibility = "hidden";
	SketchbookPage.style.left = "100%";
	$("#sketchbook_page").removeClass('return').addClass('away');

	console.log("main clicked");
	

});

//OTHER TRIGGER



$(Other).click(function() {

	OtherPage.style.visibility = "visible";
	OtherPage.style.left = "18%";
	$("#other_page").removeClass('away').addClass('return');
	MainPage.style.visibility = "hidden";
	$("#all-work-list").removeClass('return').addClass('away');
	MainPage.style.left = "100%";
	SketchbookPage.style.visibility = "hidden";
	SketchbookPage.style.left = "100%";
	$("#sketchbook_page").removeClass('return').addClass('away');


});

//SKETCHBOOK TRIGGER

$(Sketchbook).click(function() {
	
	$("#sketchbook_page").removeClass('away').addClass('return');
	SketchbookPage.style.visibility = "visible";
	SketchbookPage.style.left = "18%";
	MainPage.style.visibility = "hidden";
	MainPage.style.left = "100%";
	$("#all-work-list").removeClass('return').addClass('away');
	OtherPage.style.visibility = "hidden";
	OtherPage.style.left = "100%";
	$("#other_page").removeClass('return').addClass('away');
});




// -------------------- FULL PROJECTS

//PROJECT BUTTONS

var BackToWork = document.getElementById('work-header');
var Okay = document.getElementById('okay-cover');
var Hack2018 = document.getElementById('hack2018-cover')
var Spot = document.getElementById('spot-cover')

//PROJECT PAGES
var AllWorkPage = document.getElementById('all-work-page');
var OkayProject = document.getElementById('okay-project');
var Hack2018Project = document.getElementById('hack2018-project');
var SpotProject = document.getElementById('spot-project');
var PawsProject = document.getElementById('paws-project');


//PROJECT TITLES 
var OkayTitle = document.getElementById('okay-title');
var Hack2018Title = document.getElementById('hack2018-title');
var Hack2017Title = document.getElementById('hack2017-title');
var SpotTitle = document.getElementById('spot-title');
var PidanTitle = document.getElementById('pidan-title');
var TripsTitle = document.getElementById('3trips-title');
var KvshTitle = document.getElementById('kvsh-title');
var UkTitle = document.getElementById('uk-title');
var StripeTitle = document.getElementById('stripe-title');
var PulangTitle = document.getElementById('pulang-title');
var RetroTitle = document.getElementById('retro-title');
var LameiTitle = document.getElementById('lamei-title');
var ElevateTitle = document.getElementById('elevate-title');









//PROJECT HR
var OkayHR = document.getElementById('okay-hr');
var Hack2018HR = document.getElementById('hack2018-hr');
var Hack2017HR = document.getElementById('hack2017-hr');
var SpotHR = document.getElementById('spot-hr');
var PidanHR = document.getElementById('pidan-hr');
var TripsHR = document.getElementById('trips-hr');
var KvshHR = document.getElementById('kvsh-hr');


// START DESKTOP STATE /////////////////////////////////////////////////

ssm.addState({
    id: 'desktop',
    query: '(min-width: 1024px)',
    onEnter: function(){
		console.log('enter desktop');

    

// PROJECT TRIGGERS /////////////


// STRIPE

$("#stripe-cover").click(function() {

	$("#all-work-page").removeClass('return-left').addClass('away-left');
	$("#stripe-project").removeClass('project-away').addClass('project-return');

	$('.trans--grow').addClass('shrink');
	$('.trans--grow').removeClass('grow');
	StripeTitle.style.left = "4%";
	TripsHR.style.left = "29%";
});

$("#stripe-body").scroll(function() {

	var scrollStripe = $("#stripe-body").scrollTop();
		
			if ( scrollStripe < 600) {
				stripeP1.style.display = "block"; 
			} else {
				stripeP1.style.display = "none";
			}
			if (scrollStripe > 600 && scrollStripe < 1200) {
				stripeP2.style.display = "block";
			} else {
				stripeP2.style.display = "none";
			}
			if (scrollStripe > 1200 && scrollStripe < 2000) {
				stripeP3.style.display = "block";
			} else {
				stripeP3.style.display = "none";
			}
			if (scrollStripe > 2000 && scrollStripe < 2800) {
				stripeP4.style.display = "block";
			} else {
				stripeP4.style.display = "none";
			}
			if (scrollStripe > 2800 && scrollStripe < 3500) {
				stripeP5.style.display = "block";
			} else {
				stripeP5.style.display = "none";
			}
			if (scrollStripe > 3500 && scrollStripe < 4300) {
				stripeP6.style.display = "block";
			} else {
				stripeP6.style.display = "none";
			}
			if (scrollStripe > 4300 && scrollStripe < 5000) {
				stripeP7.style.display = "block";
			} else {
				stripeP7.style.display = "none";
			}
			if (scrollStripe > 5000 && scrollStripe < 5800) {
				stripeP8.style.display = "block";
			} else {
				stripeP8.style.display = "none";
			}
			if (scrollStripe > 5800 && scrollStripe < 6200) {
				stripeP9.style.display = "block";
			} else {
				stripeP9.style.display = "none";
			}
			if (scrollStripe > 6200 && scrollStripe < 6900) {
				stripeP10.style.display = "block";
			} else {
				stripeP10.style.display = "none";
			}
			if (scrollStripe > 6900 && scrollStripe < 7300) {
				stripeP11.style.display = "block";
			} else {
				stripeP11.style.display = "none";
			}
			if (scrollStripe > 7300 && scrollStripe < 8000) {
				stripeP12.style.display = "block";
			} else {
				stripeP12.style.display = "none";
			}
			if (scrollStripe > 8000 && scrollStripe < 10200) {
				stripeP13.style.display = "block";
			} else {
				stripeP13.style.display = "none";
			}
			if (scrollStripe > 10200 && scrollStripe < 10800) {
				stripeP14.style.display = "block";
			} else {
				stripeP14.style.display = "none";
			}
			if (scrollStripe > 10800 && scrollStripe < 12200) {
				stripeP15.style.display = "block";
			} else {
				stripeP15.style.display = "none";
			}
			if (scrollStripe > 12200 && scrollStripe < 13800) {
				stripeP16.style.display = "block";
			} else {
				stripeP16.style.display = "none";
			}
			if (scrollStripe > 13800 && scrollStripe < 14500) {
				stripeP17.style.display = "block";
			} else {
				stripeP17.style.display = "none";
			}
			if (scrollStripe > 14500 && scrollStripe < 15300) {
				stripeP18.style.display = "block";
			} else {
				stripeP18.style.display = "none";
			}
			if (scrollStripe > 15300 && scrollStripe < 16000) {
				stripeP19.style.display = "block";
			} else {
				stripeP19.style.display = "none";
			}
			if (scrollStripe > 16000 && scrollStripe < 16600) {
				stripeP20.style.display = "block";
			} else {
				stripeP20.style.display = "none";
			}
			if (scrollStripe > 16600 && scrollStripe < 17600) {
				stripeP21.style.display = "block";
			} else {
				stripeP21.style.display = "none";
			}
			if (scrollStripe > 17600 && scrollStripe < 18100) {
				stripeP22.style.display = "block";
			} else {
				stripeP22.style.display = "none";
			}
			

});

// UK

$("#uk-cover").click(function() {

	$("#all-work-page").removeClass('return-left').addClass('away-left');
	$("#uk-project").removeClass('project-away').addClass('project-return');

	$('.trans--grow').addClass('shrink');
	$('.trans--grow').removeClass('grow');
	UkTitle.style.left = "4%";
	TripsHR.style.left = "40%";
});

$("#uk-body").scroll(function() {

	var scrollUK = $("#uk-body").scrollTop();
		
			if ( scrollUK < 600) {
				ukP1.style.display = "block"; 
			} else {
				ukP1.style.display = "none";
			}
			if (scrollUK > 600 && scrollUK < 1200) {
				ukP2.style.display = "block";
			} else {
				ukP2.style.display = "none";
			}
			if (scrollUK > 1200 && scrollUK < 2400) {
				ukP3.style.display = "block";
			} else {
				ukP3.style.display = "none";
			}
			if (scrollUK > 2400 && scrollUK < 5000) {
				ukP4.style.display = "block";
			} else {
				ukP4.style.display = "none";
			}
			if (scrollUK > 5000 && scrollUK < 6800) {
				ukP5.style.display = "block";
			} else {
				ukP5.style.display = "none";
			}
			if (scrollUK > 6800 && scrollUK < 7000) {
				ukP6.style.display = "block";
			} else {
				ukP6.style.display = "none";
			}
			

});

// PULANG

$("#pulang-cover").click(function() {

	$("#all-work-page").removeClass('return-left').addClass('away-left');
	$("#pulang-project").removeClass('project-away').addClass('project-return');

	$('.trans--grow').addClass('shrink');
	$('.trans--grow').removeClass('grow');
	PulangTitle.style.left = "4%";
	TripsHR.style.left = "29%";
});

$("#pulang-body").scroll(function() {

	var scrollPulang = $("#pulang-body").scrollTop();
		
			if ( scrollPulang < 600) {
				pulangP1.style.display = "block"; 
			} else {
				pulangP1.style.display = "none";
			}
			if (scrollPulang > 600 && scrollPulang < 1200) {
				pulangP2.style.display = "block";
			} else {
				pulangP2.style.display = "none";
			}
			if (scrollPulang > 1200 && scrollPulang < 2000) {
				pulangP3.style.display = "block";
			} else {
				pulangP3.style.display = "none";
			}
			if (scrollPulang > 2000 && scrollPulang < 2600) {
				pulangP4.style.display = "block";
			} else {
				pulangP4.style.display = "none";
			}
			if (scrollPulang > 2600 && scrollPulang < 6800) {
				pulangP5.style.display = "block";
			} else {
				pulangP5.style.display = "none";
			}
			

});

// ELEVATOGETHER

$("#elevate-cover").click(function() {

	$("#all-work-page").removeClass('return-left').addClass('away-left');
	$("#elevate-project").removeClass('project-away').addClass('project-return');

	$('.trans--grow').addClass('shrink');
	$('.trans--grow').removeClass('grow');
	ElevateTitle.style.left = "4%";
	TripsHR.style.left = "39%";
});

$("#elevate-body").scroll(function() {

	var scrollElevate = $("#elevate-body").scrollTop();
		
			if ( scrollElevate < 600) {
				eP1.style.display = "block"; 
			} else {
				eP1.style.display = "none";
			}
			if (scrollElevate > 600 && scrollElevate < 1200) {
				eP2.style.display = "block";
			} else {
				eP2.style.display = "none";
			}
			if (scrollElevate > 1200 && scrollElevate < 2000) {
				eP3.style.display = "block";
			} else {
				eP3.style.display = "none";
			}
			if (scrollElevate > 2000 && scrollElevate < 2600) {
				eP4.style.display = "block";
			} else {
				eP4.style.display = "none";
			}
			if (scrollElevate > 2600 && scrollElevate < 6800) {
				eP5.style.display = "block";
			} else {
				eP5.style.display = "none";
			}
			

});

// 3 TRIPS


			$("#3trips-cover").click(function() {

				$("#all-work-page").removeClass('return-left').addClass('away-left');
				$("#trips-project").removeClass('project-away').addClass('project-return');

				$('.trans--grow').addClass('shrink');
				$('.trans--grow').removeClass('grow');
				TripsTitle.style.left = "4%";
				TripsHR.style.left = "35%";
			});

			$("#trips-body").scroll(function() {

				var scrollTrips = $("#trips-body").scrollTop();
					// console.log(scrollOkay);
						if ( scrollTrips < 600) {
							tripsP1.style.display = "block"; 
						} else {
							tripsP1.style.display = "none";
						}
						if (scrollTrips > 600 && scrollTrips < 1200) {
							tripsP2.style.display = "block";
						} else {
							tripsP2.style.display = "none";
						}
						if (scrollTrips > 1200 && scrollTrips < 1900) {
							tripsP3.style.display = "block";
						} else {
							tripsP3.style.display = "none";
						}
						if (scrollTrips > 1900 && scrollTrips < 2400) {
							tripsP4.style.display = "block";
						} else {
							tripsP4.style.display = "none";
						}
						

			});

// PIDAN
			$("#pidan-cover").click(function() {

				$("#all-work-page").removeClass('return-left').addClass('away-left');
				$("#pidan-project").removeClass('project-away').addClass('project-return');

				$('.trans--grow').addClass('shrink');
				$('.trans--grow').removeClass('grow');
				PidanTitle.style.left = "4%";
				PidanHR.style.left = "41%";
			});

			$("#pidan-body").scroll(function() {

				var scrollPidan = $("#pidan-body").scrollTop();
					// console.log(scrollOkay);
						if ( scrollPidan < 600) {
							pidanP1.style.display = "block"; 
						} else {
							pidanP1.style.display = "none";
						}
						if (scrollPidan > 600 && scrollPidan < 1200) {
							pidanP2.style.display = "block";
						} else {
							pidanP2.style.display = "none";
						}
						if (scrollPidan > 1200 && scrollPidan < 1800) {
							pidanP3.style.display = "block";
						} else {
							pidanP3.style.display = "none";
						}
						if (scrollPidan > 1800 && scrollPidan < 3400) {
							pidanP4.style.display = "block";
						} else {
							pidanP4.style.display = "none";
						}
						if (scrollPidan > 3400 && scrollPidan < 3900) {
							pidanP5.style.display = "block";
						} else {
							pidanP5.style.display = "none";
						}
						if (scrollPidan > 3900 && scrollPidan < 4400) {
							pidanP6.style.display = "block";
						} else {
							pidanP6.style.display = "none";
						}
						if (scrollPidan > 4400 && scrollPidan < 5100) {
							pidanP7.style.display = "block";
						} else {
							pidanP7.style.display = "none";
						}
						if (scrollPidan > 5100 && scrollPidan < 5700) {
							pidanP8.style.display = "block";
						} else {
							pidanP8.style.display = "none";
						}
						if (scrollPidan > 5700 && scrollPidan < 6200) {
							pidanP9.style.display = "block";
						} else {
							pidanP9.style.display = "none";
						}
						if (scrollPidan > 6200 && scrollPidan < 6800) {
							pidanP10.style.display = "block";
						} else {
							pidanP10.style.display = "none";
						}
						if (scrollPidan > 6800 && scrollPidan < 7400) {
							pidanP11.style.display = "block";
						} else {
							pidanP11.style.display = "none";
						}
						if (scrollPidan > 7400 && scrollPidan < 8000) {
							pidanP12.style.display = "block";
						} else {
							pidanP12.style.display = "none";
						}
						if (scrollPidan > 8000 && scrollPidan < 8500) {
							pidanP13.style.display = "block";
						} else {
							pidanP13.style.display = "none";
						}
						if (scrollPidan > 8500 && scrollPidan < 9100) {
							pidanP14.style.display = "block";
						} else {
							pidanP14.style.display = "none";
						}
						if (scrollPidan > 9100 && scrollPidan < 9700) {
							pidanP15.style.display = "block";
						} else {
							pidanP15.style.display = "none";
						}
						if (scrollPidan > 9700 && scrollPidan < 10200) {
							pidanP16.style.display = "block";
						} else {
							pidanP16.style.display = "none";
						}
						if (scrollPidan > 10200 && scrollPidan < 10800) {
							pidanP17.style.display = "block";
						} else {
							pidanP17.style.display = "none";
						}

			});

// OKAY

			$(Okay).click(function() {
				
				$("#all-work-page").removeClass('return-left').addClass('away-left');

				$("#okay-project").removeClass('project-away').addClass('project-return');

				$('.trans--grow').addClass('shrink');
				$('.trans--grow').removeClass('grow');
				OkayTitle.style.left = "4%";
				OkayHR.style.left = "28%";


			});

			$("#okay-body").scroll(function() {
				var okayP1 = document.getElementById('okayP1');
				var okayP2 = document.getElementById('okayP2');

				var scrollOkay = $("#okay-body").scrollTop();
					console.log(scrollOkay);
						if ( scrollOkay < 500) {
							okayP1.style.display = "block"; 
						} else {
							okayP1.style.display = "none";
						}

						if (scrollOkay > 500 && scrollOkay < 1200) {
							okayP2.style.display = "block";
						} else {
							okayP2.style.display = "none";
						}
						if (scrollOkay > 1200 && scrollOkay < 1700) {
							okayP3.style.display = "block";
						} else {
							okayP3.style.display = "none";
						}
						if (scrollOkay > 1700 && scrollOkay < 2400) {
							okayP4.style.display = "block";
						} else {
							okayP4.style.display = "none";
						}
						if (scrollOkay > 2400 && scrollOkay < 3100) {
							okayP5.style.display = "block";
						} else {
							okayP5.style.display = "none";
						}
						if (scrollOkay > 3100 && scrollOkay < 3800) {
							okayP6.style.display = "block";
						} else {
							okayP6.style.display = "none";
						}
						if (scrollOkay > 3800 && scrollOkay < 4300) {
							okayP7.style.display = "block";
						} else {
							okayP7.style.display = "none";
						}
						if (scrollOkay > 4300 && scrollOkay < 5000) {
							okayP8.style.display = "block";
						} else {
							okayP8.style.display = "none";
						}
						if (scrollOkay > 5000 && scrollOkay < 5600) {
							okayP9.style.display = "block";
						} else {
							okayP9.style.display = "none";
						}
						if (scrollOkay > 5600 && scrollOkay < 6500) {
							okayP10.style.display = "block";
						} else {
							okayP10.style.display = "none";
						}
						if (scrollOkay > 6500 && scrollOkay < 7000) {
							okayP11.style.display = "block";
						} else {
							okayP11.style.display = "none";
						}
						if (scrollOkay > 7000 && scrollOkay < 7600) {
							okayP12.style.display = "block";
						} else {
							okayP12.style.display = "none";
						}

			});

// HACK@BROWN 2018
			$(Hack2018).click(function() {

				$("#all-work-page").removeClass('return-left').addClass('away-left');

				$("#hack2018-project").removeClass('project-away').addClass('project-return');

				$('.trans--grow').addClass('shrink');
				$('.trans--grow').removeClass('grow');
				Hack2018Title.style.left = "4%";
				Hack2018HR.style.left = "39%";
			});

			$("#hack2018-body").scroll(function() {

				var scrollHack2018 = $("#hack2018-body").scrollTop();
					// console.log(scrollOkay);
						if ( scrollHack2018 < 500) {
							hack2018P1.style.display = "block"; 
						} else {
							hack2018P1.style.display = "none";
						}

						if (scrollHack2018 > 500 && scrollHack2018 < 1000) {
							hack2018P2.style.display = "block";
						} else {
							hack2018P2.style.display = "none";
						}
						if (scrollHack2018 > 1000 && scrollHack2018 < 1700) {
							hack2018P3.style.display = "block";
						} else {
							hack2018P3.style.display = "none";
						}
						if (scrollHack2018 > 1700 && scrollHack2018 < 2500) {
							hack2018P4.style.display = "block";
						} else {
							hack2018P4.style.display = "none";
						}
						if (scrollHack2018 > 2500 && scrollHack2018 < 3200) {
							hack2018P5.style.display = "block";
						} else {
							hack2018P5.style.display = "none";
						}
						if (scrollHack2018 > 3200 && scrollHack2018 < 3700) {
							hack2018P6.style.display = "block";
						} else {
							hack2018P6.style.display = "none";
						}
						if (scrollHack2018 > 3700 && scrollHack2018 < 4300) {
							hack2018P7.style.display = "block";
						} else {
							hack2018P7.style.display = "none";
						}
						if (scrollHack2018 > 4300 && scrollHack2018 < 4700) {
							hack2018P8.style.display = "block";
						} else {
							hack2018P8.style.display = "none";
						}
						if (scrollHack2018 > 4700 && scrollHack2018 < 5400) {
							hack2018P9.style.display = "block";
						} else {
							hack2018P9.style.display = "none";
						}
						if (scrollHack2018 > 5400 && scrollHack2018 < 5700) {
							hack2018P10.style.display = "block";
						} else {
							hack2018P10.style.display = "none";
						}


			});


//HACK@BROWN 2017

			$("#hack2017-cover").click(function() {

				$("#all-work-page").removeClass('return-left').addClass('away-left');
				$("#hack2017-project").removeClass('project-away').addClass('project-return');

				$('.trans--grow').addClass('shrink');
				$('.trans--grow').removeClass('grow');
				Hack2017Title.style.left = "4%";
				Hack2017HR.style.left = "39%";
			});

			$("#hack2017-body").scroll(function() {

				var scrollHack2017 = $("#hack2017-body").scrollTop();
					// console.log(scrollOkay);
						if ( scrollHack2017 < 500) {
							hack2017P1.style.display = "block"; 
						} else {
							hack2017P1.style.display = "none";
						}
						if ( scrollHack2017 > 500 && scrollHack2017 < 2400) {
							hack2017P2.style.display = "block"; 
						} else {
							hack2017P2.style.display = "none";
						}
						if ( scrollHack2017 > 2400 && scrollHack2017 < 3000) {
							hack2017P3.style.display = "block"; 
						} else {
							hack2017P3.style.display = "none";
						}
						if ( scrollHack2017 > 3000 && scrollHack2017 < 3600) {
							hack2017P4.style.display = "block"; 
						} else {
							hack2017P4.style.display = "none";
						}
						if ( scrollHack2017 > 3600 && scrollHack2017 < 4200) {
							hack2017P5.style.display = "block"; 
						} else {
							hack2017P5.style.display = "none";
						}
						if ( scrollHack2017 > 4200 && scrollHack2017 < 5300) {
							hack2017P6.style.display = "block"; 
						} else {
							hack2017P6.style.display = "none";
						}
						if ( scrollHack2017 > 5300 && scrollHack2017 < 6800) {
							hack2017P7.style.display = "block"; 
						} else {
							hack2017P7.style.display = "none";
						}
						if ( scrollHack2017 > 6800 && scrollHack2017 < 7300) {
							hack2017P8.style.display = "block"; 
						} else {
							hack2017P8.style.display = "none";
						}

			});

			// RETRO

			$("#retro-cover").click(function() {

				$("#all-work-page").removeClass('return-left').addClass('away-left');
				$("#retro-project").removeClass('project-away').addClass('project-return');

				$('.trans--grow').addClass('shrink');
				$('.trans--grow').removeClass('grow');
				RetroTitle.style.left = "4%";
				TripsHR.style.left = "42%";
			});

			$("#retro-body").scroll(function() {

				var scrollRetro = $("#retro-body").scrollTop();
					
						if ( scrollRetro < 400) {
							retroP1.style.display = "block"; 
						} else {
							retroP1.style.display = "none";
						}
						if (scrollRetro > 400 && scrollRetro < 1600) {
							retroP2.style.display = "block";
						} else {
							retroP2.style.display = "none";
						}
						if (scrollRetro > 1600 && scrollRetro < 4800) {
							retroP3.style.display = "block";
						} else {
							retroP3.style.display = "none";
						}
						if (scrollRetro > 4800 && scrollRetro < 8000) {
							retroP4.style.display = "block";
						} else {
							retroP4.style.display = "none";
						}
						// if (scrollRetro > 6000 && scrollRetro < 6800) {
						// 	retroP5.style.display = "block";
						// } else {
						// 	retroP5.style.display = "none";
						// }
						

			});

			// LA MEI

			$("#lamei-cover").click(function() {

				$("#all-work-page").removeClass('return-left').addClass('away-left');
				$("#lamei-project").removeClass('project-away').addClass('project-return');

				$('.trans--grow').addClass('shrink');
				$('.trans--grow').removeClass('grow');
				LameiTitle.style.left = "4%";
				TripsHR.style.left = "38%";
			});

			$("#lamei-body").scroll(function() {

				var scrollLamei = $("#lamei-body").scrollTop();
					
						if ( scrollLamei < 600) {
							lameiP1.style.display = "block"; 
						} else {
							lameiP1.style.display = "none";
						}
						if (scrollLamei > 600 && scrollLamei < 3000) {
							lameiP2.style.display = "block";
						} else {
							lameiP2.style.display = "none";
						}
						

			});

		}
});
// END DESKTOP STATE

// START TABLET STATE /////////////////////////////////////////////////
ssm.addState({
	id: 'tablet',
	query: '(min-width: 768px) and (max-width: 1023px)',
	onEnter: function(){
		console.log('enter tablet');

		// PROJECT TRIGGERS
		$("#stripe-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#stripe-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			StripeTitle.style.left = "4%";
			TripsHR.style.left = "37%";
		});
		$("#uk-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#uk-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			UkTitle.style.left = "4%";
			TripsHR.style.left = "55%";
		});
		$("#pulang-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#pulang-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			PulangTitle.style.left = "4%";
			TripsHR.style.left = "36%";
		});
		$("#3trips-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#trips-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			TripsTitle.style.left = "4%";
			TripsHR.style.left = "47%";
		});
		$("#okay-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#okay-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			OkayTitle.style.left = "4%";
			TripsHR.style.left = "51%";
		});
		$("#hack2018-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#hack2018-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			Hack2018Title.style.left = "4%";
			TripsHR.style.left = "55%";
		});
		$("#hack2017-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#hack2017-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			Hack2017Title.style.left = "4%";
			TripsHR.style.left = "55%";
		});
		$("#pidan-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#pidan-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			PidanTitle.style.left = "4%";
			TripsHR.style.left = "57%";
		});
		$("#retro-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#retro-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			RetroTitle.style.left = "4%";
			TripsHR.style.left = "60%";
		});
		$("#lamei-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#lamei-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			LameiTitle.style.left = "4%";
			TripsHR.style.left = "55%";
		});

		// RETURN TO MAIN///////////

		$(BackToWork).click(function() {

			$('.trans--grow').addClass('grow');
				$('.trans--grow').removeClass('shrink');
				$('.trans--grow').removeClass('shrink2');
				$('.trans--grow').removeClass('shrink3');


			$(".project-mobile").scrollTop(0);
			$(".project-page").removeClass('project-return').addClass('project-away');
			console.log('return');


		});
	}
});
// END TABLET STATE

// START MOBILE STATE /////////////////////////////////////////////////

ssm.addState({
	id: 'mobile',
	query: '(max-width: 767px)',
	onEnter: function(){
		console.log('enter mobile');


		// PROJECT TRIGGERS
		$("#stripe-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#stripe-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink3');
			$('.trans--grow').removeClass('grow');
			StripeTitle.style.left = "3%";
			TripsHR.style.left = "52%";
		});
		$("#uk-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#uk-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink3');
			$('.trans--grow').removeClass('grow');
			UkTitle.style.left = "3%";
			TripsHR.style.left = "80%";
		});
		$("#pulang-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#pulang-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink3');
			$('.trans--grow').removeClass('grow');
			PulangTitle.style.left = "3%";
			TripsHR.style.left = "52%";
		});
		$("#3trips-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#trips-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink3');
			$('.trans--grow').removeClass('grow');
			TripsTitle.style.left = "3%";
			TripsHR.style.left = "65%";
		});
		$("#okay-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#okay-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink3');
			$('.trans--grow').removeClass('grow');
			OkayTitle.style.left = "3%";
			TripsHR.style.left = "71%";
		});
		$("#hack2018-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#hack2018-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink3');
			$('.trans--grow').removeClass('grow');
			Hack2018Title.style.left = "3%";
			TripsHR.style.left = "76%";
		});
		$("#hack2017-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#hack2017-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink3');
			$('.trans--grow').removeClass('grow');
			Hack2017Title.style.left = "3%";
			TripsHR.style.left = "76%";
		});
		$("#pidan-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#pidan-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink3');
			$('.trans--grow').removeClass('grow');
			PidanTitle.style.left = "3%";
			TripsHR.style.left = "79%";
		});
		$("#retro-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#retro-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink3');
			$('.trans--grow').removeClass('grow');
			RetroTitle.style.left = "3%";
			TripsHR.style.left = "82%";
		});
		$("#lamei-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#lamei-project-mobile").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink3');
			$('.trans--grow').removeClass('grow');
			LameiTitle.style.left = "3%";
			TripsHR.style.left = "75%";
		});

		// RETURN TO MAIN///////////

		$(BackToWork).click(function() {

			$('.trans--grow').addClass('grow');
				$('.trans--grow').removeClass('shrink');
				$('.trans--grow').removeClass('shrink2');
				$('.trans--grow').removeClass('shrink3');


			$(".project-mobile").scrollTop(0);
			$(".project-page").removeClass('project-return').addClass('project-away');
			console.log('return');


		});

	}
});



// BACK TO WORK RESET

			$(BackToWork).click(function() {
				$("#all-work-page").removeClass('away-left').addClass('return-left');

				$("#stripe-body").scrollTop(0);
				$("#stripe-project").removeClass('project-return').addClass('project-away');
				
				$("#uk-body").scrollTop(0);
				$("#uk-project").removeClass('project-return').addClass('project-away');

				$("#trips-body").scrollTop(0);
				$("#trips-project").removeClass('project-return').addClass('project-away');

				$("#pidan-body").scrollTop(0);
				$("#pidan-project").removeClass('project-return').addClass('project-away');

				$("#pulang-body").scrollTop(0);
				$("#pulang-project").removeClass('project-return').addClass('project-away');

				$("#okay-body").scrollTop(0);
				$("#okay-project").removeClass('project-return').addClass('project-away');

				$("#hack2018-project").removeClass('project-return').addClass('project-away');
				$("#hack2018-body").scrollTop(0);

				$("#hack2017-project").removeClass('project-return').addClass('project-away');
				$("#hack2018-body").scrollTop(0);

				$("#retro-body").scrollTop(0);
				$("#retro-project").removeClass('project-return').addClass('project-away');

				$("#lamei-body").scrollTop(0);
				$("#lamei-project").removeClass('project-return').addClass('project-away');

				$('.trans--grow').addClass('grow');
				$('.trans--grow').removeClass('shrink');
				$('.trans--grow').removeClass('shrink2');
				
				OkayTitle.style.left = "100%";
				OkayHR.style.left = "100%";

				Hack2018Title.style.left = "100%";
				Hack2018HR.style.left = "100%";

				Hack2017Title.style.left = "100%";
				Hack2017HR.style.left = "100%";
				
				PidanTitle.style.left = "100%";
				PidanHR.style.left = "100%";
				
				TripsTitle.style.left = "100%";
				TripsHR.style.left = "100%";

				UkTitle.style.left = "100%";

				StripeTitle.style.left = "100%";

				PulangTitle.style.left = "100%";

				RetroTitle.style.left = "100%";

				LameiTitle.style.left = "100%";



			});

});


setTimeout(function(){
        $('.trans--grow').addClass('grow');
	}, 275);
	

	
	
















