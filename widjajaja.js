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





})
$(function() {
    $('body').removeClass('fade-out');

// var myLazyLoad = new LazyLoad();
$("img.lazy").lazyload({effect : "fadeIn"});

window.fadeIn = function(obj) {
    $(obj).fadeIn(1000);
}
});







