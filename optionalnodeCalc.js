let rs = require('readline-sync');

let operationSentence, operation, operatorIndex, firstNumber, secondNumber;

function expression() {
    operationSentence = rs.question('Please write the expression you want to solve: ');
    findOperator(operationSentence);
}

function findOperator(operationSentence) {
    for (let index = 0; index < operationSentence.length; index++) {
        const element = operationSentence[index];
        if (element === '+' || element === '-' || element === '*' || element === '/') {
            operatorIndex = index;
            operation = element;
            break;
        } else if (index === operationSentence.length - 1) {
            console.log('That did not have a valid operation. Please try again.');
            expression();
        }    
    }
    findNumbers(operationSentence);
}

function findNumbers(operationSentence) {
    firstNumber = parseFloat(operationSentence.slice(0,operatorIndex));
    secondNumber = parseFloat(operationSentence.slice(operatorIndex+1));

    if (!firstNumber || !secondNumber) {
        console.log('One of them weren\'t numbers. Please try again.');
        expression();
    } else {
        calculation(firstNumber, secondNumber, operation);
    }
}

function calculation(firstNumber, secondNumber, operation) {
    if (operation === '+') {
        console.log('The result is: ' + (firstNumber + secondNumber));
    } else if (operation === '-') {
        console.log('The result is: ' + (firstNumber - secondNumber));
    } else if (operation === '*') {
        console.log('The result is: ' + (firstNumber * secondNumber));
    } else if (operation === '/') {
        console.log('The result is: ' + (firstNumber / secondNumber));
    }
}

expression();

