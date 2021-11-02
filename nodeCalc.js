let rs = require('readline-sync');

let operation, firstNumber, secondNumber;


operation = rs.question('What operation would you like to perform? ', {
    limit: ['+','-','*','/'],
    limitMessage: 'That is not a valid operation.'
});

firstNumber = rs.questionFloat('Please enter the first number: ', {
    limitMessage: 'This is not a number.'
});

secondNumber = rs.questionFloat('Please enter the second number: ', {
    limitMessage: 'This is not a number.'
});



if (operation === '+') {
    console.log('The result is: ' + (firstNumber + secondNumber));
} else if (operation === '-') {
    console.log('The result is: ' + (firstNumber - secondNumber));
} else if (operation === '*') {
    console.log('The result is: ' + (firstNumber * secondNumber));
} else if (operation === '/') {
    console.log('The result is: ' + (firstNumber / secondNumber));
}