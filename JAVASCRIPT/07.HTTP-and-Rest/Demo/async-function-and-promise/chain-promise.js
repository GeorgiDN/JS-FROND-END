async function chainPromises() {
    const firstResult = await new Promise((resolve) => resolve(5));
    console.log(firstResult); // 5

    const secondResult = firstResult * 2;
    console.log(secondResult); // 10

    const thirdResult = secondResult + 3;
    console.log(thirdResult); // 13

    return thirdResult; // Final result
}

chainPromises().then((finalResult) => console.log("Final:", finalResult));
// Logs:
// 5
// 10
// 13
// Final: 13





// new Promise((resolve) => {
//     resolve(5);
// })
//     .then((number) => {
//         console.log(number); // 5
//         return number * 2;
//     })
//     .then((result) => {
//         console.log(result); // 10
//         return result + 3;
//     })
//     .then((finalResult) => {
//         console.log(finalResult); // 13
//     });
