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
var PuppetTitle = document.getElementById('puppet-title');










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

// PUPPET

$("#puppet-cover").click(function() {

	$("#all-work-page").removeClass('return-left').addClass('away-left');
	$("#puppet-project").removeClass('project-away').addClass('project-return');

	$('.trans--grow').addClass('shrink');
	$('.trans--grow').removeClass('grow');
	PuppetTitle.style.left = "4%";
	TripsHR.style.left = "37%";
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

// PULANG

$("#pulang-cover").click(function() {

	$("#all-work-page").removeClass('return-left').addClass('away-left');
	$("#pulang-project").removeClass('project-away').addClass('project-return');

	$('.trans--grow').addClass('shrink');
	$('.trans--grow').removeClass('grow');
	PulangTitle.style.left = "4%";
	TripsHR.style.left = "29%";
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

// 3 TRIPS


			$("#3trips-cover").click(function() {

				$("#all-work-page").removeClass('return-left').addClass('away-left');
				$("#trips-project").removeClass('project-away').addClass('project-return');

				$('.trans--grow').addClass('shrink');
				$('.trans--grow').removeClass('grow');
				TripsTitle.style.left = "4%";
				TripsHR.style.left = "35%";
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


// OKAY

			$(Okay).click(function() {
				
				$("#all-work-page").removeClass('return-left').addClass('away-left');

				$("#okay-project").removeClass('project-away').addClass('project-return');

				$('.trans--grow').addClass('shrink');
				$('.trans--grow').removeClass('grow');
				OkayTitle.style.left = "4%";
				OkayHR.style.left = "28%";


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


//HACK@BROWN 2017

			$("#hack2017-cover").click(function() {

				$("#all-work-page").removeClass('return-left').addClass('away-left');
				$("#hack2017-project").removeClass('project-away').addClass('project-return');

				$('.trans--grow').addClass('shrink');
				$('.trans--grow').removeClass('grow');
				Hack2017Title.style.left = "4%";
				Hack2017HR.style.left = "39%";
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

// LA MEI

			$("#lamei-cover").click(function() {

				$("#all-work-page").removeClass('return-left').addClass('away-left');
				$("#lamei-project").removeClass('project-away').addClass('project-return');

				$('.trans--grow').addClass('shrink');
				$('.trans--grow').removeClass('grow');
				LameiTitle.style.left = "4%";
				TripsHR.style.left = "38%";
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
			$("#stripe-project").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			StripeTitle.style.left = "4%";
			TripsHR.style.left = "37%";
		});
		$("#puppet-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#puppet-project").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			PuppetTitle.style.left = "4%";
			TripsHR.style.left = "50%";
		});
		$("#uk-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#uk-project").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			UkTitle.style.left = "4%";
			TripsHR.style.left = "55%";
		});
		$("#pulang-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#pulang-project").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			PulangTitle.style.left = "4%";
			TripsHR.style.left = "36%";
		});
		$("#3trips-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#trips-project").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			TripsTitle.style.left = "4%";
			TripsHR.style.left = "47%";
		});
		$("#okay-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#okay-project").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			OkayTitle.style.left = "4%";
			TripsHR.style.left = "51%";
		});
		$("#hack2018-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#hack2018-project").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			Hack2018Title.style.left = "4%";
			TripsHR.style.left = "55%";
		});
		$("#hack2017-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#hack2017-project").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			Hack2017Title.style.left = "4%";
			TripsHR.style.left = "55%";
		});
		$("#pidan-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#pidan-project").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			PidanTitle.style.left = "4%";
			TripsHR.style.left = "57%";
		});
		$("#retro-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#retro-project").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink2');
			$('.trans--grow').removeClass('grow');
			RetroTitle.style.left = "4%";
			TripsHR.style.left = "60%";
		});
		$("#lamei-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#lamei-project").removeClass('project-away').addClass('project-return');
		
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
			$("#stripe-project").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink3');
			$('.trans--grow').removeClass('grow');
			StripeTitle.style.left = "3%";
			TripsHR.style.left = "52%";
		});
		$("#puppet-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#puppet-project").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink3');
			$('.trans--grow').removeClass('grow');
			PuppetTitle.style.left = "3%";
			TripsHR.style.left = "71%";
		});
		$("#uk-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#uk-project").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink3');
			$('.trans--grow').removeClass('grow');
			UkTitle.style.left = "3%";
			TripsHR.style.left = "80%";
		});
		$("#pulang-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#pulang-project").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink3');
			$('.trans--grow').removeClass('grow');
			PulangTitle.style.left = "3%";
			TripsHR.style.left = "52%";
		});
		$("#3trips-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#trips-project").removeClass('project-away').addClass('project-return');
		
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
			$("#hack2018-project").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink3');
			$('.trans--grow').removeClass('grow');
			Hack2018Title.style.left = "3%";
			TripsHR.style.left = "76%";
		});
		$("#hack2017-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#hack2017-project").removeClass('project-away').addClass('project-return');
		
			$('.trans--grow').addClass('shrink3');
			$('.trans--grow').removeClass('grow');
			Hack2017Title.style.left = "3%";
			TripsHR.style.left = "76%";
		});
		$("#pidan-cover").click(function() {

			$("#all-work-page").removeClass('return-left').addClass('away-left');
			$("#pidan-project").removeClass('project-away').addClass('project-return');
		
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

				$("#puppet-body").scrollTop(0);
				$("#puppet-project").removeClass('project-return').addClass('project-away');
				
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
				$("#hack2017-body").scrollTop(0);

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

				PuppetTitle.style.left = "100%";




			});

});


setTimeout(function(){
        $('.trans--grow').addClass('grow');
	}, 275);
	

	
	
















