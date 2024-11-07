function isPerfectNumber(num) {
    let sumDivisors = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sumDivisors += i;
        }
    }
    if (sumDivisors === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

isPerfectNumber(6);
isPerfectNumber(28);
isPerfectNumber(496);
isPerfectNumber(8128);
