function sorNumbers(arr) {
    let sortedArray = arr.sort((a, b) => a - b);
    let firstHalfArray = sortedArray.slice(0, arr.length / 2);
    let secondHalfArray = sortedArray.slice();
    let iterations = arr.length / 2
    let newArray = [];

    for (let i = 0; i < iterations; i++) {
        if (firstHalfArray.length !== 0) {
        newArray.push(firstHalfArray.shift());
        }
        if (secondHalfArray.length !== 0) {
        newArray.push(secondHalfArray.pop())
        }
    }
    return newArray
}

console.log(sorNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));


// function sorNumbers(arr) {
//     arr = arr.sort((a, b) => (a - b));
//     let sortedArray = []
//
//     let iterations = parseInt((arr.length / 2))
//     for (let i = 0; i <= iterations; i++) {
//         sortedArray.push(arr.shift());
//         if (arr.length !== 0) sortedArray.push(arr.pop());
//     }
//
//     return sortedArray;
// }
