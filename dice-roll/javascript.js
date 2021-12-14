
// ====================
// ===== DICE I =======
// ====================
//Generate a random number between 1 and 6.
var randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);

//Use random number to specify image
var randomImage = "images/dice" + randomNumber + ".png";


//javascript command
var imageAttribute = document.querySelectorAll("img")[0].setAttribute("src", randomImage);


// ====================
// === DICE II ========
// ====================
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var randomImage1 = "images/dice" + randomNumber1 + ".png";

var imageAttribute1 = document.querySelectorAll("img")[1].setAttribute("src", randomImage1);

// ====================
// = DETERMINE WINNER =
// ====================
if(randomNumber > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber < randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Its a draw!";
}







