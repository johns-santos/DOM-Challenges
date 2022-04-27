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
    guessesLeft = 3;

const UIGame = document.querySelector('#game'),
        UIMinNum = document.querySelector('.min-num'),
        UIMaxNum = document.querySelector('.max-num'),
        UIGuessBtn = document.querySelector('#guess-btn'),
        UIGuessInput = document.querySelector('#guess-input'),
        UIMessage = document.querySelector('.message');

// ASSIGN UI min and max
UIMinNum.textContent = min;
UIMaxNum.textContent = max;

// EVENT LISTENER for submit button
UIGuessBtn.addEventListener('click', function() {
    let guess = parseInt(UIGuessInput.value);
    console.log(guess)
    // validate
    if (isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}.`, 'red')
        UIGuessInput.style.borderColor = 'red';
    }

    // CHeck if won
    if(guess === winningNum) {
        // Disable input
        UIGuessInput.disabled = true;
        // Change border color
        UIGuessInput.style.borderColor = 'green';
        // Set message
        setMessage(`${winningNum} is correct!`, 'green')

    } else {

        }
});

// Set message - use color as a second property.
function setMessage(msg, color){
    UIMessage.style.color = color;
    UIMessage.textContent = msg;
}