function perfectNumber(num) {
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

perfectNumber(6);
perfectNumber(28);
perfectNumber(496);
perfectNumber(8128);
