function arrayRotation(arr, count) {
    for (let i = 0; i < count; i++) {
        arr.push(arr.shift());
    }
    console.log(arr.join(" "));
}


// arrayRotation([51, 47, 32, 61, 21], 2);
