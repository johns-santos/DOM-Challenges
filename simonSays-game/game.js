var buttonColours = ['red', 'blue', 'green', 'yellow']
var gamePattern = []
var userClickedPattern = []
var started = false;
var level = 0;


//Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call  nextSequence()
$(document).on('keydown', function(){
  // Check if key has been pressed and games already started
  if(!started) {

    //if not, update h1, call nextSequence, & change started to true.
    $("#level-title").text("Level " + level);
    nextSequence();
    started=true;
  }

});


// Detect when any of the buttons are clicked and trigger a handler function.
$('.btn').click(function () {
  // Store the id of the button that got clicked.
  var userChosenColour = $(this).attr('id')
  //Add contents of userChosenColour to userClickedPattern array;
  userClickedPattern.push(userChosenColour)
  playSound(userChosenColour)
  animatePress(userChosenColour)
})

function nextSequence () {

  // Increment LEVEL by 1
  level++;

  // Update h1 level
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4)
  var randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)

  //Use JQuery to select button with mathcing ID as randomChosenColour
  //Add flash animation to button selected in 1.
  $('#' + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100)
  // Play sound for button colour in step 1.
  playSound(randomChosenColour)

}

  //Play sound function - determines file to be played based on button pressed.
function playSound (name) {
  var audio = new Audio('sounds/' + name + '.mp3')
  audio.play()
}


//Animation flash, when button is pressed.
function animatePress (currentColour) {
  $('.' + currentColour).addClass('pressed')

  setTimeout(function () {
    $('.' + currentColour).removeClass('pressed')
  }, 100)
}



