const defaultResult = 0
let currentResult = defaultResult
let logEntries = []

// Gets user input and converts to integer
function getUserNumberInput () {
  return parseInt(userInput.value)
}

//Generates outputResult used in UI
function createAndWriteOutput (operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
  outputResult(currentResult, calcDescription)
}

//Writes operation to log
function writeToLog (
  operationIdentifier,
  preResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    preResult: preResult,
    number: operationNumber,
    result: newResult
  }
  logEntries.push(logEntry)
  console.log(logEntries)
}


function calculateResult (calculationType) {
  const enteredNumber = getUserNumberInput()

// If none of the cases are meet then do run rest of code.
if (
  calculationType !== 'ADD' &&
  calculationType !== 'SUBTRACT' &&
  calculationType !== 'MULTIPLY' &&
  calculationType !== 'DIVIDE' ||
  // If enteredNumber is falsie (anything other than 0)
  !enteredNumber
) {
  return
}


  const initialResult = currentResult
  let mathOperator
  if (calculationType === 'ADD') {
    currentResult += enteredNumber
    mathOperator = '+'
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber
    mathOperator = '*'
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber
    mathOperator = '/'
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber
    mathOperator = '-'
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber)
  writeToLog(calculationType, initialResult, enteredNumber, currentResult)
}

function add () {
  calculateResult('ADD')
}

function subtract () {
  calculateResult('SUBTRACT')
}

function multiply () {
  calculateResult('MULTIPLY')
}

function divide () {
  calculateResult('DIVIDE')
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
