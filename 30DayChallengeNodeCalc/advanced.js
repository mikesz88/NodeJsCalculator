var rs = require('readline-sync');

let expression = '';
let operation = '';
let firstNumber = 0;
let secondNumber = 0;
let checker = new RegExp('[(+|*|/)]', 'g');
let subtract = new RegExp('[-]', 'g')

function getOperation() {
    return rs.question('Please write the expression: ');
}

function findTheNumber(string) {
    return parseFloat(string);
}

function deleteToOperator(string) {
    let index = string.search(checker);
    if (index === -1) {
        index = string.search(subtract);
        return string.slice(index+1, string[-1]);
    } else {
        return string.slice(index+1, string[-1]);        
    }
}

function findTheOperation(string) {
    let operator = string.match(checker);
    if (operator === null) {
    let operator = string.match(subtract);
    return operator[0];
        
    } else {
    return operator[0];        
    }
}

function letsOperate(operator, num1, num2) {
    let mathTime = {
        '+': (num1,num2) => num1 + num2,
        '-': (num1,num2) => num1 - num2,
        '*': (num1,num2) => num1 * num2,
        '/': (num1,num2) => num1 / num2
    }
    console.log('The result is: ' + mathTime[operator](num1,num2)); 
}

expression = getOperation(expression);
operation = findTheOperation(expression);
firstNumber = findTheNumber(expression);
secondNumber = findTheNumber(deleteToOperator(expression));
letsOperate(operation,firstNumber,secondNumber);
