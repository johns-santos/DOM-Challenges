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
  winningNum = 2,
  guessesLeft = 3

const UIGame = document.querySelector('#game'),
  UIMinNum = document.querySelector('.min-num'),
  UIMaxNum = document.querySelector('.max-num'),
  UIGuessBtn = document.querySelector('#guess-btn'),
  UIGuessInput = document.querySelector('#guess-input'),
  UIMessage = document.querySelector('.message')

// ASSIGN UI min and max
UIMinNum.textContent = min
UIMaxNum.textContent = max

// EVENT LISTENER for submit button
UIGuessBtn.addEventListener('click', function () {
  let guess = parseInt(UIGuessInput.value)
  console.log(guess)

  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red')
  }

  // Check if WON
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct!`)

  } else {
    // Wrong guess ***********************
    guessesLeft -= 1
    setMessage(`You have ${guessesLeft} left.`)

    if (guessesLeft === 0) {
      // GAME OVER - lost
      gameOver(false, `Game Over. You Lose!`)
    } else {
      // Game continues - answer wrong *****************
      UIGuessInput.style.borderColor = 'red'

      // Clear input
      UIGuessInput.value = ''

      // Notify user guess is not correct.
      setMessage(`(${guess}) is incorrect. ${guessesLeft} guesses remaining.`)
    }
  }
})

// GAME OVER function
function gameOver (won, msg) {
  let color
  won === true ? (color = 'green') : (color = 'red')
  // Disable input
  UIGuessInput.disabled = true
  // Change border color
  UIGuessInput.style.borderColor = color
  // Set text color
  UIMessage.style.color = color;
  // Set message
  setMessage(msg)
}

// Set message - use color as a second property.
function setMessage (msg, color) {
  UIMessage.style.color = color
  UIMessage.textContent = msg
}
