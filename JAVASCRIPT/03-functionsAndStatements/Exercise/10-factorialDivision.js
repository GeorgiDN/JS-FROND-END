function factorialDivision(firstNumber, secondNumber) {
    function calculateFactorial(num) {
        if (num === 1) {
            return num;
        } else {
            return num * calculateFactorial(num - 1);
        }
    }

    firstNumber = calculateFactorial(firstNumber);
    secondNumber = calculateFactorial(secondNumber);
    return (firstNumber / secondNumber).toFixed(2);
}

console.log(factorialDivision(5, 2));




