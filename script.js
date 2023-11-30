const operands = document.getElementsByClassName('operands');
const display = document.getElementById('calculator-display');

let operandOne = '';
let operandTwo = '';

for (let operand of operands) {
    // add the event listener to each element
    operand.addEventListener('click', displayText);
  }
  
function displayText(event) {

    let text = event.target.textContent;
    operandOne += text; 
    display.innerHTML = operandOne;
}