function mathOperations(firstNumber, secondNumber, operator) {
    let result;
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "%":
            result = firstNumber % secondNumber;
            break;
        case "**":
            result = firstNumber ** secondNumber;
            break;
    }
    console.log(result);
}

// Example usage
mathOperations(5, 6, '+');
mathOperations(10, 3, '-');
mathOperations(4, 5, '*');
mathOperations(20, 4, '/');
