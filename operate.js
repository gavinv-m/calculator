function add(num1, num2) {
    return (num1 + num2); 
}

function divide(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return 'Error: Division by zero';
    }
}


function exp(num1, num2) {
    return (Math.pow(num1, num2));
}


function factorial(num) {
    if (num === 0) return 1;
    let total = 1;

    while (num >= 1) {
    total = total * num;
    num--;
    }
    return total;
}


function multiply(num1, num2) {
    return num1 * num2;
}


function squareRoot(num) {
    return Math.sqrt(num);
}


function subtract(num1, num2) {
    return num1 - num2;
}




