function oddAndEvenSum(currentNumber) {
    const digits = currentNumber.toString().split("").map(Number);
    let oddSum = 0;
    let evenSum = 0;

    for (let digit of digits) {
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddAndEvenSum(1000435));
