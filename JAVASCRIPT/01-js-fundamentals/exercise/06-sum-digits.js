function sumDigits (num) {
    let stingNum = num.toString()
    let totalSum = 0
    for (let digit of stingNum) {
        totalSum += Number(digit)
    }
    console.log(totalSum)
}

// sumDigits(245678)
