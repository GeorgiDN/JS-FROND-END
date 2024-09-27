function listOfNames(namesArray) {
    let sortedArray = namesArray.sort((a, b) => a.localeCompare(b));
    if (namesArray) {
        for (let i = 0; i < sortedArray.length; i++) {
            console.log(`${i + 1}.${sortedArray[i]}`);
        }
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"])



// function listOfNames(namesArray) {
//     namesArray.sort((a, b) => a.localeCompare(b)).map((name, index) => {
//         console.log(`${index + 1}.${name}`);
//     })
// }



// function listOfNames(namesArray) {
//     let sortedResult = namesArray.slice()
//         .sort((a, b) => a.localeCompare(b))
//         .map((name, index) => `${index + 1}.${name}`)
//         .join("\n");
//     console.log(sortedResult)
// }
