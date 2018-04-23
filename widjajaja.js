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
	OtherPage.style.visibility = "hidden";
	OtherPage.style.left = "100%";
	SketchbookPage.style.visibility = "hidden";
	SketchbookPage.style.left = "100%";
	console.log("main clicked");
	

});

//OTHER TRIGGER



$(Other).click(function() {

	OtherPage.style.visibility = "visible";
	OtherPage.style.left = "18%";
	MainPage.style.visibility = "hidden";
	MainPage.style.left = "100%";
	SketchbookPage.style.visibility = "hidden";
	SketchbookPage.style.left = "100%";

});

//SKETCHBOOK TRIGGER

$(Sketchbook).click(function() {
	
	SketchbookPage.style.visibility = "visible";
	SketchbookPage.style.left = "18%";
	MainPage.style.visibility = "hidden";
	MainPage.style.left = "100%";
	OtherPage.style.visibility = "hidden";
	OtherPage.style.left = "100%";
});




// -------------------- FULL PROJECTS

//PROJECT BUTTONS

var BackToWork = document.getElementById('work-header');
var Okay = document.getElementById('okay-cover');
var Spot = document.getElementById('spot-cover')

//PROJECT PAGES
var AllWorkPage = document.getElementById('all-work-page');
var OkayProject = document.getElementById('okay-project');
var SpotProject = document.getElementById('spot-project');


//PROJECT TITLES 
var OkayTitle = document.getElementById('okay-title');
var SpotTitle = document.getElementById('spot-title');


//PROJECT HR
var OkayHR = document.getElementById('okay-hr');
var SpotHR = document.getElementById('spot-hr');


// PROJECT TRIGGERS

// OKAY

			$(Okay).click(function() {
				AllWorkPage.style.right = "100%";
				AllWorkPage.style.visibility = "hidden";
				OkayProject.style.left = "0%";
				OkayProject.style.visibility = "visible";
				$('.trans--grow').addClass('shrink');
				$('.trans--grow').removeClass('grow');
				OkayTitle.style.left = "3%";
				OkayHR.style.left = "29%";
			});

			


			$("#okay-body").scroll(function() {
				var okayP1 = document.getElementById('okayP1');
				var okayP2 = document.getElementById('okayP2');

				var scrollOkay = $("#okay-body").scrollTop();
					console.log(scrollOkay);
						if ( scrollOkay < 400) {
							okayP1.style.display = "block"; 
						} else {
							okayP1.style.display = "none";
						}

						if (scrollOkay > 400 && scrollOkay < 900) {
							okayP2.style.display = "block";
						} else {
							okayP2.style.display = "none";
						}
						if (scrollOkay > 900 && scrollOkay < 1500) {
							okayP3.style.display = "block";
						} else {
							okayP3.style.display = "none";
						}

			});

// SPOT
			$(Spot).click(function() {
				AllWorkPage.style.right = "100%";
				AllWorkPage.style.visibility = "hidden";
				SpotProject.style.left = "0%";
				SpotProject.style.visibility = "visible";
				$('.trans--grow').addClass('shrink');
				$('.trans--grow').removeClass('grow');
				SpotTitle.style.left = "3%";
				SpotHR.style.left = "32%";
			});

			$("#spot-body").scroll(function() {
				// var spotP1 = document.getElementById('spotP1');
				// var spotP2 = document.getElementById('spotP2');

				var scrollSpot = $("#spot-body").scrollTop();
					// console.log(scrollOkay);
						if ( scrollSpot < 400) {
							spotP1.style.display = "block"; 
						} else {
							spotP1.style.display = "none";
						}

						if (scrollSpot > 400 && scrollSpot < 900) {
							spotP2.style.display = "block";
						} else {
							spotP2.style.display = "none";
						}
						if (scrollSpot > 900 && scrollSpot < 1500) {
							spotP3.style.display = "block";
						} else {
							spotP3.style.display = "none";
						}

			});

			// BACK TO WORK

			$(BackToWork).click(function() {
				AllWorkPage.style.right = "0%";
				AllWorkPage.style.visibility = "visible";

				OkayProject.style.left = "100%";
				OkayProject.style.visibility = "hidden";
				SpotProject.style.left = "100%";
				SpotProject.style.visibility = "hidden";

				$('.trans--grow').addClass('grow');
				$('.trans--grow').removeClass('shrink');
				
				OkayTitle.style.left = "100%";
				OkayHR.style.left = "100%";
				SpotTitle.style.left = "100%";
				SpotHR.style.left = "100%";

			});


	

})


setTimeout(function(){
        $('.trans--grow').addClass('grow');
	}, 275);
	

	
	
















