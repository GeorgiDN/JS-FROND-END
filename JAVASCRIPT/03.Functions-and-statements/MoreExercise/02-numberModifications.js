function numberModifications(number) {
    let digitsArray = number.toString().split("").map(Number)
    let sumOfDigits = 0;

    while (true) {
        sumOfDigits = sum(digitsArray);
        if (sumOfDigits / digitsArray.length > 5)  {
            break
        } else {
            digitsArray.push(9)
        }
    }
    console.log(Number(digitsArray.join("")))

    function sum(arr) {
        let sumOfDigits = 0;
        for (let num of arr) {
            sumOfDigits += num;
        }
        return sumOfDigits;
    }
}

numberModifications(101);
numberModifications(5835);


