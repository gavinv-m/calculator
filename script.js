const clear = document.getElementById('clear');
const display = document.getElementById('calculator-display');
const erase = document.getElementById('erase');
const equalsButton = document.getElementById('equals-button');
const operands = document.getElementsByClassName('operands');
const operators = document.getElementsByClassName('all-operators');
const history = document.getElementById('history');

let decimalCounter = 0;
let operandOne = '';
let operandTwo = '';
let operator = '';
let operatorCounter = 0;
let recentResult = '';

let operandOneActive = true;
let operandTwoActive = false;


clear.addEventListener('click', () => {

  decimalCounter = 0;
  display.innerHTML = '';
  operandOne = '';
  operandTwo = '';
  operator = '';
  operatorCounter = 0;
}); 


erase.addEventListener('click', () => {

  if (operandOneActive) {
    
    let operandOneLength = operandOne.length;
    operandOne = operandOne.slice(0, operandOneLength - 1);
    display.innerHTML = operandOne;

    let isThereDecimal = operandOne.includes('.');
    if (!isThereDecimal) decimalCounter = 0;
  }

  else {
    let operandTwoLength = operandTwo.length;
    operandTwo = operandTwo.slice(0, operandTwoLength - 1);
    display.innerHTML = operandTwo;

    let isThereDecimal = operandTwo.includes('.');
    if (!isThereDecimal) decimalCounter = 0;
  }
});


equalsButton.addEventListener('click', () => {

  decimalCounter = 0;
  operatorCounter = 0;
  calculateResult();
});


for (let operand of operands) {
    operand.addEventListener('click', displayText);
  }


for (let operator of operators) {
  operator.addEventListener('click', selectOperator); 
}

history.addEventListener('click', () => {

  display.innerHTML = recentResult; //

  if (operandOneActive) {
    operandOne = recentResult;
  }

  else {
    operandTwo = recentResult;
  }
}); 

function calculateResult() {

  if (operandTwoActive) {
    operandOneActive = true;
    operandTwoActive = false;
  }

  if (operandOne.includes('√') || operandTwo.includes('√')) {
    operator = '√';

    if (operandOne.includes('√')) {
      operandOne = operandOne.replace('√', '');
    }

    else {
      operandTwo = operandTwo.replace('√', '');
    }
  }

  let result = operate(operandOne, operator, operandTwo);
  recentResult = result;
  operandOne = result;
  operandTwo = '';

  if (result.length > 10) {

    result = result.slice(0, 10);
  }

  display.innerHTML = result;
} 


function displayText(event) {

  let operand = event.target.textContent;
  
  if (operand === '.') {

    decimalCounter++;

    if (decimalCounter > 1) return;
  }

  if (operandOneActive && operandOne.length < 10) {

    operandOne += operand;
    display.innerHTML = operandOne;
  }

  else if (operandTwoActive && operandTwo.length < 10) {

    operandTwo += operand;
    display.innerHTML = operandTwo;
  }

}


function selectOperator(event) {

    operatorCounter++;

    if (operatorCounter > 1) {
      calculateResult();
      decimalCounter = 0;
      operator = event.target.textContent;
      operandOneActive = false;
      operandTwoActive = true;
      return;
    }

    if (operandOneActive) {
      decimalCounter = 0;
      operandOneActive = false;
      operandTwoActive = true;
    }

    operator = event.target.textContent;
}


function operate(numberOne, operatorSign, numberTwo='1') {

  numberOne = +numberOne; 
  numberTwo = +numberTwo;

  switch (operatorSign) {

    case '+':
      let resultAdd = add(numberOne, numberTwo);
      let resultAddString = String(resultAdd);
      return resultAddString;

    case '-': 
      let resultSubtract = subtract(numberOne, numberTwo);
      let resultSubtractString = String(resultSubtract);
      return resultSubtractString;

    
    case '*':
      let resultMultiply = multiply(numberOne, numberTwo);
      let resultMultiplyString = String(resultMultiply);
      return resultMultiplyString;

    case '÷': 
      let resultDivide = divide(numberOne, numberTwo);
      let resultDivideString = String(resultDivide);
      return resultDivideString;

    case 'x^y': 
      let resultExp = exp(numberOne, numberTwo);
      let resultExpString = String(resultExp);
      return resultExpString;

    case '!':
      let resultFactorial = factorial(numberOne);
      let resultFactorialString = String(resultFactorial);
      return resultFactorialString;

      case '√': 
        let resultSqrt = squareRoot(numberOne);
        let resultSqrtString = String(resultSqrt);
        return resultSqrtString;
  }
}