var numberOfButtons = document.querySelectorAll('.drum').length

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    //create varialble for the letter of contained in the HTTML of the button - required so CSS know where to render background images.
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  })
}

//Add kEYPRESS eventlistener to ENTIRE document to listen for keyboard press
document.addEventListener('keypress', function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound (key) {
  // Use a switch statement to determine with sound file to play based on innerHTML of button pressed.
  switch (key) {
    case 'w':
      var crash = new Audio('sounds/crash.mp3')
      crash.play()
      break
    case 'a':
      var kick_bass = new Audio('sounds/kick-bass.mp3')
      kick_bass.play()
      break
    case 's':
      var snare = new Audio('sounds/snare.mp3')
      snare.play()
      break
    case 'd':
      var tom1 = new Audio('sounds/tom-1.mp3')
      tom1.play()
      break
    case 'j':
      var tom2 = new Audio('sounds/tom-2.mp3')
      tom2.play()
      break
    case 'k':
      var tom3 = new Audio('sounds/tom-3.mp3')
      tom3.play()
      break
    case 'l':
      var tom4 = new Audio('sounds/tom-4.mp3')
      tom4.play()
      break;

    // Use default to log anything returned that doesnt match a CASE
    default:
      console.log(buttonInnerHTML);
  }
}

// function that adds "pressed" class upon key press.
function buttonAnimation (currentKey) {
  var activeButton = document.querySelector('.' + currentKey);

  activeButton.classList.add('pressed');

  // Timeout function removes "pressed" class are 1 milisec.
  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}
