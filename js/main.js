var timer =
{
	'start': 0, 
	'responseTime': 0,
	'movementTime': 0, 
	'stage1': false,
	'stage2': false
}
//var database = firebase.database();
var d = new Date();

$('document').ready(function(){
d
	$('#next').click(function(){
		timer.stage1 = false, timer.stage2 = false;
		timer.start = 0, timer.responseTime = 0, timer.movementTime = 0; 
		timer.stage1 = true;
		timer.start = Date.now(); console.log(timer.start);
	});
	$("#next").mouseleave(function(){
		if(!timer.stage1){
			timer.stage1 = true;
			timer.responseTime = Date.now() - timer.start; console.log(timer.responseTime)
		}
	});
	$('.btn').mouseenter(function(){
		if(!timer.stage2){
			timer.stage2 = true;
			timer.movementTime = Date.now() - timer.start - timer.responseTime;
			console.log(timer.movementTime);
			// write to database
			console.log(timer)
		}
	})
	/* 
	When we start generating data from events, we'll want to work on writing information to the database.
	We should only be WRITING information to the database -- no need to retrieve data right now on the application, since we can do that via the console. 
	More information on https://firebase.google.com/docs/database/web/read-and-write
	*/
})
function randomImg(){
    var randomNumber = Math.floor(Math.random() * 11) + 1;
    var imgName = randomNumber + ".png";
    document.getElementById("face").src= "./images/" + imgName ;

    var randomNumber2 = Math.ceil(Math.random() * 3);
    var imgName2 = "City" + randomNumber2 + ".jpg";
    document.getElementById("bg").src= "./images/" + imgName2 ;
 }

 function handler(e) {
 	e = e || window.event;

 	var X = e.pageX;
 	var Y = e.pageY;

    // IE 8
    if (pageX === undefined) {
    	pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    	pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    console.log(pageX, pageY);
}

if (document.attachEvent) document.attachEvent('mouseexit', handler);
else document.addEventListener('mousemove', handler);