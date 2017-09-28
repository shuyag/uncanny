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
	'coordinates': [], 
	'trialNum': 0,
	'write': true
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
		trial.trialNum++;
		trial.stage1 = false, trial.stage2 = false;
		trial.start = 0, trial.responseTime = 0, trial.movementTime = 0; 
		trial.coordinates = []
		$('.btn').css({'color': '#333', 'background-color': '#CCC'})
		trial.stage1 = true;
		trial.start = Date.now(); console.log(trial.start);
	});
	$("#next").mouseleave(function(){
		if(!trial.stage1){
			trial.stage1 = true;
			trial.responseTime = Date.now() - trial.start; console.log(trial.responseTime)
		}
	});
	$('.btn').click(function(){
		if(!trial.stage2){
			trial.stage2 = true;
			$(this).css({'color': 'white', 'background-color': '#008000'})
			trial.movementTime = Date.now() - trial.start - trial.responseTime;
			trial.choice = $(this).attr("id");
			console.log(trial.movementTime);
			// write to database
			if(trial.write)
				writeUserData(trial);
			console.log(trial);
			if(trial.trialNum >=50)
			{
				$('#info').text('You are done! Feel free to exit this application.');
				$('#info').css({
					'z-index': 9999, 
				})
			}

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
		//console.log(pageX, pageY);
		(trial.coordinates).push({x: pageX, y: pageY})
	}
}

document.addEventListener('mousemove', handler);

// DATA FUCKERY

for(user in userData.users){
	var maxYs = []
	for(trial in userData.users[user]){
		trialObj = userData.users[user][trial]
		console.log(trialObj)
		maxY = 0;
		first = { 
			'x': (trialObj.trajectory)[0].x, 
			'y': (trialObj.trajectory)[0].y 
		}
		//console.log('FIRST: ('+first.x+','+first.y+')')
		last = { 
				'x': (trialObj.trajectory)[(trialObj.trajectory).length-1].x, 
				'y': (trialObj.trajectory)[(trialObj.trajectory).length-1].y 
			}
		for(i in trialObj.trajectory){
			point = trialObj.trajectory[i]
			//console.log('old('+point.x+','+point.y+')')
			point.x = point.x-first.x
			point.y = first.y-point.y
			//console.log('new('+point.x+','+point.y+')')
		}
		lastPoint = (trialObj.trajectory)[(trialObj.trajectory).length-1]
		theta = Math.atan2(lastPoint.y,lastPoint.x)
		for(j in trialObj.trajectory){
			if(j != 0){
				point = trialObj.trajectory[j]
				theta_0 = Math.atan2(point.y,point.x)
				if(isNaN(theta_0))
					theta_0 = last.x - first.x > 0 ? 0 : Math.PI
				r = Math.sqrt(point.x**2 + point.y**2)
				theta_new = theta_0 < Math.PI/2 ? theta_0-theta : theta_0+theta
				point.x = r*Math.cos(theta_new)
				point.y = r*Math.sin(theta_new)
				if(maxY < Math.abs(point.y))
					maxY = Math.abs(point.y)
			}
		}
		trialObj.maxHeight = maxY;
		if(trial.responseTime < 1500)
			maxYs.push(maxY);
	}
	userData.users[user].avgY = maxYs.reduce(function(a,b){ return a+b; }) / maxYs.length;
}