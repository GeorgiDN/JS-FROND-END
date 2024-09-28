function repeatString(string, count) {
    if (count === 1) {
        return string;
    }
    return string + repeatString(string, count - 1);
}

console.log(repeatString("abc", 3));


// function repeatString(string, count) {
//     return string.repeat(count);
// }
//
// console.log(repeatString("abc" , 3));
