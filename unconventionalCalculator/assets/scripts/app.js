const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


 //Gets user input and converts to integer
function getUserNumberInput(){
    return parseInt(userInput.value);
}

//Generates outputResult used in UI
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}


function add () {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  const logEntry = 
    { operation: 'ADD',
    preResult: initialResult,
    number: enteredNumber,
    result: currentResult,
    
    };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
}


function subtract () {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
  }



function multiply () {
    const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  }


function divide () {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
  }


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

