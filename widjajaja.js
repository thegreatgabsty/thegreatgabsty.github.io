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
    $('body').removeClass('fade-out');
})

// var myLazyLoad = new LazyLoad();
// $("img.lazy").lazyload({effect : "fadeIn"});

// window.fadeIn = function(obj) {
//     $(obj).fadeIn(1000);
// }

// $(function() {
//         $('.lazy').Lazy();
//         scrollDirection: 'vertical',
//         effect: 'fadein',
//         visibleOnly: true,
//         onError: function(element) {
//         console.log('error loading ' + element.data('src'));
//         }
//     });

// document.getElementById("all").onclick = function() {
	
// };

// document.getElementById("uiux").onclick = function() {
	
// };


var navbar = document.getElementById("work-nav");
var category = navbar.getElementsByClassName("worknavbar");

// for (var i=0; i<category.length; i++) {
// 	category[i].addEventListener("click", function() {
// 		var current = document.getElementsByClassName("active");
// 		// current.classList.remove("active");
// 		current[0].className = current[0].className.replace("active", "");
// 		this.classList += " active";
// 		console.log("lmao");
// 	});
// } 

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




//PROJECT HR
var OkayHR = document.getElementById('okay-hr');
var Hack2018HR = document.getElementById('hack2018-hr');
var Hack2017HR = document.getElementById('hack2017-hr');
var SpotHR = document.getElementById('spot-hr');
var PidanHR = document.getElementById('pidan-hr');
var TripsHR = document.getElementById('trips-hr');
var KvshHR = document.getElementById('kvsh-hr');




// PROJECT TRIGGERS ////////////////////////////////////////////////////

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


// KVSH
// 			$("#kvsh-cover").click(function() {

// 				$("#all-work-page").removeClass('return-left').addClass('away-left');
// 				$("#kvsh-project").removeClass('project-away').addClass('project-return');

// 				$('.trans--grow').addClass('shrink');
// 				$('.trans--grow').removeClass('grow');
// 				KvshTitle.style.left = "4%";
// 				KvshHR.style.left = "38%";
// 			});

// 			$("#kvsh-body").scroll(function() {

// 				var scrollKvsh = $("#kvsh-body").scrollTop();
// 						if ( scrollKvsh < 600) {
// 							kvshP1.style.display = "block"; 
// 						} else {
// 							kvshP1.style.display = "none";
// 						}
// 						if (scrollKvsh > 600 && scrollKvsh < 1200) {
// 							kvshP2.style.display = "block";
// 						} else {
// 							kvshP2.style.display = "none";
// 						}
			

// });



// BACK TO WORK RESET

			$(BackToWork).click(function() {
				$("#all-work-page").removeClass('away-left').addClass('return-left');

				$("#kvsh-body").scrollTop(0);
				$("#kvsh-project").removeClass('project-return').addClass('project-away');

				$("#trips-body").scrollTop(0);
				$("#trips-project").removeClass('project-return').addClass('project-away');

				$("#pidan-body").scrollTop(0);
				$("#pidan-project").removeClass('project-return').addClass('project-away');

				$("#okay-body").scrollTop(0);
				$("#okay-project").removeClass('project-return').addClass('project-away');

				$("#hack2018-project").removeClass('project-return').addClass('project-away');
				$("#hack2018-body").scrollTop(0);

				$("#hack2017-project").removeClass('project-return').addClass('project-away');
				$("#hack2018-body").scrollTop(0);

				$('.trans--grow').addClass('grow');
				$('.trans--grow').removeClass('shrink');
				
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
				
				PawsTitle.style.left = "100%";
				PawsHR.style.left = "100%";

				KvshTitle.style.left = "100%";
				KvshHR.style.left = "100%";

			});


	

});


setTimeout(function(){
        $('.trans--grow').addClass('grow');
	}, 275);
	

	
	
















