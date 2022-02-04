const defaultResult = 0
let currentResult = defaultResult
let logEntries = []

//Gets user input and converts to integer
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

function add () {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult += enteredNumber
  createAndWriteOutput('+', initialResult, enteredNumber)
  writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract () {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult -= enteredNumber
  createAndWriteOutput('-', initialResult, enteredNumber)
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}

function multiply () {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult *= enteredNumber
  createAndWriteOutput('*', initialResult, enteredNumber)
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide () {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult /= enteredNumber
  createAndWriteOutput('/', initialResult, enteredNumber)
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
