var trial =
{
	'sessionID': (Math.ceil(Math.random() * 900000000 + 100000000)),
	// 0 for robot, 1 for human
	'choice': "",
	'face': 0,
	'background': 0,
	'start': 0, 
	'responseTime': 0,
	'movementTime': 0, 
	'stage1': false,
	'stage2': false,
	'coordinates': []
}

var database = firebase.database();

var d = new Date();

function writeUserData(input) {
	 firebase.database().ref('users/' + input.sessionID + '/' + input.start).set({
		choice: input.choice,
		face: input.face,
		background: input.background,
		responseTime: input.responseTime,
		movementTime: input.movementTime,
		trajectory : input.coordinates
	  	});
	}


$('document').ready(function(){

	$('#next').click(function(){
		trial.stage1 = false, trial.stage2 = false;
		trial.start = 0, trial.responseTime = 0, trial.movementTime = 0; 
		trial.coordinates = []
		trial.stage1 = true;
		trial.start = Date.now(); console.log(trial.start);
	});
	$("#next").mouseleave(function(){
		if(!trial.stage1){
			trial.stage1 = true;
			trial.responseTime = Date.now() - trial.start; console.log(trial.responseTime)
		}
	});
	$('.btn').mouseenter(function(){
		if(!trial.stage2){
			trial.stage2 = true;
			trial.movementTime = Date.now() - trial.start - trial.responseTime;
			trial.choice = $(this).attr("id");
			console.log(trial.movementTime);
			
			// write to database
			writeUserData(trial);
			console.log(trial)
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
    trial.face = randomNumber ;
    var imgName = randomNumber + ".png";
    document.getElementById("face").src= "./images/" + imgName ;

    var randomNumber2 = Math.ceil(Math.random() * 3);
    trial.background = randomNumber2 ;
    var imgName2 = "City" + randomNumber2 + ".jpg";
    document.getElementById("bg").src= "./images/" + imgName2 ;
 }

/* here be the mouse tracking*
pageX gets mouse position from leftmost edge of window, pageY does the same from the top. 
Basically as long as there's a window open, this will be looking for mouse movement and send coordinates to console
if(timer.stage1 && !timer.stage2 makes sure that we only record mouse movements in between the button press of NEXT to the hover
selection to only see the selection path and reduce noise.*/

 function handler(e) {
	if(trial.stage1 && !trial.stage2){
		e = e || window.event;

		var pageX = e.pageX;
		var pageY = e.pageY;
		console.log(pageX, pageY);
		(trial.coordinates).push({x: pageX, y: pageY})
	}
}

document.addEventListener('mousemove', handler);