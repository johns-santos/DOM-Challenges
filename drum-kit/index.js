let numberOfButtons = document.querySelectorAll('.drum').length

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {
    var buttonInnerHTML = this.innerHTML

    // Use a switch statement to determine with sound file to play based on innerHTML of button pressed.
    switch (buttonInnerHTML) {
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
        break

        // Use default to log anything returned that doesnt match a CASE
      default:
          console.log();
    }
  })
}

// // Play audion file;
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
