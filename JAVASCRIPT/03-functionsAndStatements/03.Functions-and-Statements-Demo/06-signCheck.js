function signCheck(firstNumber, secondNumber, thirdNumber) {

    let numbers = [firstNumber, secondNumber, thirdNumber];
    let negativeCount = 0;

    for (let number of numbers) {
        if (number < 0) negativeCount += 1;
    }

    return negativeCount % 2 === 1 ? "Negative" : "Positive";

}


console.log(signCheck(5,
 12,
-15
))
