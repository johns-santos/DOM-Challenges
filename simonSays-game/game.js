var buttonColours = ['red', 'blue', 'green', 'yellow']
var gamePattern = []

function nextSequence () {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //1. Use JQuery to select button with mathcing ID as randomChosenColour
  //2. Add flash animation to button selected in 1.
  $('.' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. use Javascript to play sound for button colour in step 1.
  var audio = new Audio('sounds/'+randomChosenColour+'.mp3');
  audio.play();
  

  
}


nextSequence ();


