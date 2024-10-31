function mathPower(num, power) {
    if (power === 1) {
        return num
    }
    return num * mathPower(num, power - 1);
}

console.log(mathPower(2, 8));



// function mathPower(num, power) {
//     console.log(num ** power);
// }
 

