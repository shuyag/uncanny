// <<<<<<< HEAD
function randomImg(){
    var randomNumber = Math.floor(Math.random() * 11) + 1;
    var imgName = randomNumber + ".png";
    document.getElementById("imageid").src= "images" + "/" + imgName ;

    var randomNumber2 = Math.floor(Math.random() * 3) + 1;
    var imgName2 = "City" + randomNumber2 + ".jpg";
    document.getElementById("backgroundid").src= "images" + "/" + imgName2 ;
 }
// =======
var database = firebase.database();

/* 
When we start generating data from events, we'll want to work on writing information to the database.
We should only be WRITING information to the database -- no need to retrieve data right now on the application, since we can do that via the console. 
More information on https://firebase.google.com/docs/database/web/read-and-write
*/
// >>>>>>> origin/master
