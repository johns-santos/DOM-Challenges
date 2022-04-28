/*
GAME FUNCTION:
- Player must guess a number between a min and max.
- Player gets a certain amount of guesses.
- Notify player of guesses remaining.
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// GAME VALUES
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

  console.log(winningNum);

const UIGame = document.querySelector('#game'),
  UIMinNum = document.querySelector('.min-num'),
  UIMaxNum = document.querySelector('.max-num'),
  UIGuessBtn = document.querySelector('#guess-btn'),
  UIGuessInput = document.querySelector('#guess-input'),
  UIMessage = document.querySelector('.message');

// ASSIGN UI min and max
UIMinNum.textContent = min;
UIMaxNum.textContent = max;

// Play again event listener
UIGame.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }

})

// EVENT LISTENER for submit button
UIGuessBtn.addEventListener('click', function() {
  let guess = parseInt(UIGuessInput.value);

  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}.`, 'grey');
    
  } else if   
  // Check if WON
  (guess === winningNum) {
    gameOver(true, `${winningNum} is correct!`)

  }else{
    // Wrong guess ***********************
    guessesLeft -= 1;
    // setMessage(`You have ${guessesLeft} left.`)

    if(guessesLeft === 0) {
      // GAME OVER - lost
      gameOver(false, `Game Over. You Lose!`);
    }else{
      // Game continues - answer wrong *****************
      UIGuessInput.style.borderColor = 'red';
      // Clear input
      UIGuessInput.value = '';
      // Notify user guess is not correct.
      setMessage(`${guess} is not correct. ${guessesLeft} guesses remaining.`, 'red');
    }
  }

});

// GAME OVER function
function gameOver (won, msg) {
  let color
  won === true ? (color = 'green') : (color = 'red')
  // Disable input
  UIGuessInput.disabled = true;
  // Change border color
  UIGuessInput.style.borderColor = color
  // Set text color
  UIMessage.style.color = color;
  // Set message
  setMessage(msg);

  // Play again
  UIGuessBtn.value = 'Play Again!';
  UIGuessBtn.className += 'play-again';
}

// GET WINNING NUM
function getRandomNum(min, max){
    // Generate a random number between 1 and 10
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Set message - use color as a second property.
function setMessage(msg, color) {
  UIMessage.style.color = color
  UIMessage.textContent = msg
}
