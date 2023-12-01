const clear = document.getElementById('clear');
const display = document.getElementById('calculator-display');
const equalsButton = document.getElementById('equals-button');
const operands = document.getElementsByClassName('operands');
const operators = document.getElementsByClassName('all-operators');

let operandOne = '';
let operandTwo = '';
let operator = '';
let operatorCounter = 0;

let operandOneActive = true;
let operandTwoActive = false;


clear.addEventListener('click', () => {

  display.innerHTML = '';
  operandOne = '';
  operandTwo = '';
  operator = '';
}); 

equalsButton.addEventListener('click', () => {

  operate(operandOne, operator, operandTwo);
});

for (let operand of operands) {
    operand.addEventListener('click', displayText);
  }

for (let operator of operators) {
  operator.addEventListener('click', selectOperator); 
}

  
function displayText(event) {

  let text;

    if (operandOneActive) {
      display.innerHTML = '';
      text = event.target.textContent;

      if (operandOne.length < 10) operandOne += text;
      display.innerHTML = operandOne;
    }

    else {
      display.innerHTML = '';
      text = event.target.textContent;

      if (operandTwo.length < 10) operandTwo += text;
      display.innerHTML = operandTwo;
    }
}

function selectOperator(event) {

    if (operandOneActive) {
      operandOneActive = false;
      operandTwoActive = true;
    }

    operator = event.target.textContent;
}

function operate(numberOne, operatorSign, numberTwo) {

  numberOne = +numberOne; 
  numberTwo = +numberTwo;

  switch (operatorSign) {

    case '+':
      let resultAdd = add(numberOne, numberTwo);
      let resultAddString = String(resultAdd);
      display.innerHTML = '';
      display.innerHTML = resultAddString;
      break;

    case '-': 
      let resultSubtract = subtract(numberOne, numberTwo);
      let resultSubtractString = String(resultSubtract);
      display.innerHTML = '';
      display.innerHTML = resultSubtractString;
      break;
    
    case '*':
      let resultMultiply = multiply(numberOne, numberTwo);
      let resultMultiplyString = String(resultMultiply);
      display.innerHTML = '';
      display.innerHTML = resultMultiplyString;
      break;

    case '÷': 
      let resultDivide = divide(numberOne, numberTwo);
      let resultDivideString = String(resultDivide);
      display.innerHTML = '';
      display.innerHTML = resultDivideString;
      break;

  }

}