function arrayRotation(arr, count) {
    for (let i = 0; i < count; i++) {
        arr.push(arr.shift());
    }
    console.log(arr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);



// function arrayRotation(arr, count) {
//     let cutOffIndex = count % arr.length;
//
//     let leftSide = arr.slice(0, cutOffIndex);
//     let rightSide = arr.slice(cutOffIndex);
//     let result = rightSide.concat(leftSide);
//     console.log(result.join(" "));
// }

// arrayRotation([51, 47, 32, 61, 21], 2);
