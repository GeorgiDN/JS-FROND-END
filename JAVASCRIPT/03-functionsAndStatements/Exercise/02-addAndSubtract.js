function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
    function sum() {
        return firstNumber + secondNumber;
    }
    function subtract(resultOfSum) {
        return resultOfSum - thirdNumber
    }
    let finalResult = sum();
    finalResult = subtract(finalResult);
    return finalResult;
}

console.log(addAndSubtract(23,6,10))
console.log(addAndSubtract(1, 17, 30))
