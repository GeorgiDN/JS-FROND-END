function printNthElement(stringsArray, step) {
    let newArray = [];

    for (let i = 0; i < stringsArray.length; i += step) {
        newArray.push(stringsArray[i]);
    }

    return newArray;
}

console.log(printNthElement(['5',
'20',
'31',
'4',
'20'],
2
))


// function printNthElement(stringsArray, step) {
//     let newArray = [];
//     stringsArray.forEach((element, index) => {
//         if (index % step === 0) {
//             newArray.push(element);
//         }
//     })
//     return newArray
// }


// function printNthElement(stringsArray, step) {
//     return (stringsArray.filter((_, i) => i % step ===0));
// }


