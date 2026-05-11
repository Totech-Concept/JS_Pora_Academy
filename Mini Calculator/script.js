function sum(num1, num2) {
    sum = num1 + num2
    return sum; 
}

function sum(num1, num2) {
    subtract = num1 - num2
    return subtract; 
}

function multiply(num1, num2) {
    multiply = num1 * num2
    return multiply; 
}

function divide(num1, num2) {
    divide = num1 / num2;
    if(num2 === 0) {
        return "Error: cannot divide by zero" 
    }
    return divide; 
}