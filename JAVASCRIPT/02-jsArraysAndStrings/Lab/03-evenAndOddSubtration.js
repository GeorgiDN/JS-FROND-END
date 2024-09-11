function calculateDiff(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    console.log(evenSum - oddSum);
}

calculateDiff([1,2,3,4,5,6])
calculateDiff([3,5,7,9])
calculateDiff([2,4,6,8,10])
