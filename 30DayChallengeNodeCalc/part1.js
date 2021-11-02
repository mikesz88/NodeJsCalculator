var rs = require('readline-sync');

let operation = '';
let firstNumber = 0;
let secondNumber = 0;
let firstOrSecond = 1;

function getOperation() {
    console.log('Operation List: "+" Addition, "-" Subtraction, "*" Multiplication, or "/" Division');
    operation = rs.question('What operation would you like to perform? ', {
        limit: ['+','-','*','/'],
        limitMessage: 'That is not a valid operation'
    });
}

function getNumber(number,whichOne) {
    if (whichOne === 1) {
        number = rs.questionFloat('Please enter the first number: ', {
            limitMessage: 'This is not a number'
        })
        whichOne++;
    } else if (whichOne === 2) {
        number = rs.questionFloat('Please enter the second number: ', {
            limitMessage: 'This is not a number'
        })
    }
    return number;
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

getOperation();
console.log(operation);
firstNumber = getNumber(firstNumber,firstOrSecond);
firstOrSecond++;
secondNumber = getNumber(secondNumber,firstOrSecond);
letsOperate(operation,firstNumber,secondNumber);