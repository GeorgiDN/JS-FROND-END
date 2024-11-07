
function nxnMatrix(num) {
    let result = ((num + " ").repeat(num) + "\n").repeat(num);
    console.log(result);
}


// function nxnMatrix(num) {
//     let matrix = [];
//
//     for (let i = 0; i < num; i++) {
//         let arr = []
//         for (let j = 0; j < num; j++) {
//             arr.push(num);
//         }
//         matrix.push(arr);
//     }
//
//     for (let row of matrix) {
//         console.log(row.join(" "));
//     }
// }

nxnMatrix(7);
