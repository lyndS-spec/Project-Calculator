let firstNumber = null;
let secondNumber = null;
let currentOperator = null;
let displayValue = "0";
let readyForNewNumber = false;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Can't divide by 0!";
  }
  return a / b;
}

function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  }
  if (operator === "-") {
    return subtract(a, b);
  }
  if (operator === "*") {
    return multiply(a, b);
  }
  if (operator === "/") {
    return divide(a, b);
  }
}

function updateDisplay() {
  document.getElementById("display").textContent = displayValue;
}

function pressNumber(numberText) {
  if (displayValue === "0" || readyForNewNumber === true) {
    displayValue = numberText;
    readyForNewNumber = false;
  }
  else {
    displayValue = displayValue + numberText;
  }
  updateDisplay();
}

function pressOperator(operatorSymbol) {
  // if we already have an operator waiting and a second number was typed,
  // solve that first before starting the next operation
  if (currentOperator !== null && readyForNewNumber === false) {
    pressEquals();
  }

  firstNumber = Number(displayValue);
  currentOperator = operatorSymbol;
  readyForNewNumber = true;
}

function pressEquals() {
  if (currentOperator === null) {
    return;
  }
  if (readyForNewNumber === true) {
    return;
  }

  secondNumber = Number(displayValue);

  let result = operate(currentOperator, firstNumber, secondNumber);

  if (typeof result === "number") {
    result = Math.round(result * 1000) / 1000;
  }

  displayValue = result;
  firstNumber = result;
  currentOperator = null;
  readyForNewNumber = true;

  updateDisplay();
}

function clearCalculator() {
  firstNumber = null;
  secondNumber = null;
  currentOperator = null;
  displayValue = "0";
  readyForNewNumber = false;
  updateDisplay();
}