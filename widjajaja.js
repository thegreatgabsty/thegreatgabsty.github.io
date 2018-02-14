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

document.getElementById("all").onclick = function() {
	
};

document.getElementById("uiux").onclick = function() {
	
};


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

})










