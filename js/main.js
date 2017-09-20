function randomImg(){
    var randomNumber = Math.floor(Math.random() * 11) + 1;
    var imgName = randomNumber + ".png";
    document.getElementById("imageid").src= "images" + "/" + imgName ;

    var randomNumber2 = Math.floor(Math.random() * 3) + 1;
    var imgName2 = "City" + randomNumber2 + ".jpg";
    document.getElementById("backgroundid").src= "images" + "/" + imgName2 ;
 }