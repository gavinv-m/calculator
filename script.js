const clear = document.getElementById('clear');
const display = document.getElementById('calculator-display');
const erase = document.getElementById('erase');
const equalsButton = document.getElementById('equals-button');
const operands = document.getElementsByClassName('operands');
const operators = document.getElementsByClassName('all-operators');
const history = document.getElementById('history');

let operandOne = '';
let operandTwo = '';
let operator = '';
let operatorCounter = 0;
let recentResult = '';

let operandOneActive = true;
let operandTwoActive = false;


clear.addEventListener('click', () => {

  display.innerHTML = '';
  operandOne = '';
  operandTwo = '';
  operator = '';
}); 


erase.addEventListener('click', () => {

  if (operandOneActive) {
    
    let operandOneLength = operandOne.length;
    operandOne = operandOne.slice(0, operandOneLength - 1);
    display.innerHTML = operandOne;
  }

  else {
    let operandTwoLength = operandTwo.length;
    operandTwo = operandTwo.slice(0, operandTwoLength - 1);
    display.innerHTML = operandTwo;
  }
});


equalsButton.addEventListener('click', () => {

  let result = operate(operandOne, operator, operandTwo);
  recentResult = result;
  // operandOne = result;

  if (operandTwoActive) {
    operandOneActive = true;
    operandTwoActive = false;
  }

  if (result.length > 10) {

    result = result.slice(0, 10);
  }

  display.innerHTML = '';
  display.innerHTML = result;
});


for (let operand of operands) {
    operand.addEventListener('click', displayText);
  }


for (let operator of operators) {
  operator.addEventListener('click', selectOperator); 
}

// history.addEventListener('click', () => {

//   display.innerHTML = '';

//   if (operandOneActive) {
//     operandOne = recentResult;
//     display.innerHTML = operandOne;
//   }

//   else {
//     operandTwo = recentResult;
//     display.innerHTML = operandOne;
//   }
// }); 

  
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
  }

}