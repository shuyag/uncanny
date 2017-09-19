/*
	Prism by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

// (function($) {

// 	skel.breakpoints({
// 		xlarge:	'(max-width: 1680px)',
// 		large:	'(max-width: 1280px)',
// 		medium:	'(max-width: 980px)',
// 		small:	'(max-width: 736px)',
// 		xsmall:	'(max-width: 480px)'
// 	});

// 	$(function() {

// 		var	$window = $(window),
// 			$body = $('body');

// 		// Disable animations/transitions until the page has loaded.
// 			$body.addClass('is-loading');

// 			$window.on('load', function() {
// 				window.setTimeout(function() {
// 					$body.removeClass('is-loading');
// 				}, 100);
// 			});

// 		// Fix: Placeholder polyfill.
// 			$('form').placeholder();

// 		// Prioritize "important" elements on medium.
// 			skel.on('+medium -medium', function() {
// 				$.prioritize(
// 					'.important\\28 medium\\29',
// 					skel.breakpoint('medium').active
// 				);
// 			});

// 	});

// })(jQuery);


// Random Picture Function 
//_______________________________________________________________________________________
// window.onload = choosePic;

// var myPix = new Array("images/H.City.jpg", "images/M.City.jpg", "images/L.City.jpg");

// function choosePic() {
// 	var randomNum = Math.floor(Math.random() * myPix.length);
// 	document.getElementById("myPicture").src = myPix[randomNum];
//________________________________________________________________________________________

var n = 0;

function changeImage() {
  if ( n == 0 ) {
    document.images["flag"].src = "/images/program/js/forms/scotflag.png";
    n = 1;
  }
  else if ( n == 1 ) {
    document.images["flag"].src = "/images/program/js/forms/engflag.png";
    n = 2;
  }
  else {
    document.images["flag"].src = "/images/program/js/forms/walesflag.png";
    n = 0;
  }
}