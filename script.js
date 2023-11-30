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


for (let operand of operands) {
    operand.addEventListener('click', displayText);
  }

for (let operator of operators) {
  operator.addEventListener('click', (event) => {

    if (operandOneActive) {
      operandOneActive = false;
      operandTwoActive = true;
    }

    operator = event.target.textContent;
  });
}
  
function displayText(event) {

  let text; 

    if (operandOneActive) {
      display.innerHTML = '';
      text = event.target.textContent;
      operandOne += text;
      display.innerHTML = operandOne;
    }

    else {
      display.innerHTML = '';
      text = event.target.textContent;
      operandTwo += text;
      display.innerHTML = operandTwo;
    }
}