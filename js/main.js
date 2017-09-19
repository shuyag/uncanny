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


 function randomImg1() {
      var myImages1 = new Array ();
      myImages1[1] = "images/1.jpg";
      myImages1[2] = "images/2.jpg";
      myImages1[3] = "images/3.jpg";
      myImages1[4] = "images/4.jpg";
      myImages1[5] = "images/5.jpg";
      myImages1[6] = "images/6.jpg";
      myImages1[7] = "images/7.jpg";
      myImages1[8] = "images/8.jpg";
      myImages1[9] = "images/9.jpg";
      myImages1[10] = "images/10.jpg";
      myImages1[11] = "images/11.jpg";

      var rnd = Math.floor( Math.random() * myImages1.length );
      if( rnd == 0 ) {
        rnd =1;
      }
      html_code = '<img class= src="' + myImages1[rnd] + '" />"'; 
      document.write(html_code);
    }