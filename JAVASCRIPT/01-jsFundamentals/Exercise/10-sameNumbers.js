function sameNumber(number) {
    let stringNumber = number.toString();
    let totalSum = 0;
    let result = true;
    let firstDigit = Number(stringNumber[0]);

    for (let num of stringNumber) {
        totalSum += Number(num)
        if (Number(num) !== firstDigit) {
            result = false
        }
    }
    console.log(result);
    console.log(totalSum);
}

// sameNumber(2222222)
// sameNumber(1234)
