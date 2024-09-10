function printSum(start, end) {
    let totalSum = 0
    let myList = []
    for (let num = start; num <= end; num++) {
        totalSum += num
        myList.push(num)
    }
    console.log(myList.join(' '))
    console.log(`Sum: ${totalSum}`)
}

// printSum(5, 10)
// printSum(0, 26)
// printSum(50, 60)
