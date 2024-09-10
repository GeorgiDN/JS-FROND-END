function calculateResult(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        // default:
        //     console.log('Invalid operator');
        //     return;
    }

    console.log(result);
}

// Example usage
calculateResult(5, 6, '+');
calculateResult(10, 3, '-');
calculateResult(4, 5, '*');
calculateResult(20, 4, '/');
