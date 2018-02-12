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
});







