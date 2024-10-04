function solve(inputArray) {
    let searchedWords = inputArray.shift().split(" ");
    let wordsCount = {};

    searchedWords.forEach(word => {
        wordsCount[word] = 0;
    });

    inputArray.forEach(word => {
        if (wordsCount.hasOwnProperty(word)) {
            wordsCount[word] += 1;
        }
    });

    Object.entries(wordsCount)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, count]) => {
            console.log(`${word} - ${count}`);
        });
}




// 40/100
// function solve (inputArray) {
//     let searchedWords = inputArray.shift().split(" ");
//     let wordsCount = {};
//     let sentence = inputArray.join(" ").split(" ");
//
//     sentence.forEach(word => {
//         if (searchedWords.includes(word)) {
//             if (!wordsCount[word]) {
//                 wordsCount[word] = 1;
//             } else {
//                 wordsCount[word] += 1;
//             }
//         }
//     });
//     Object.entries(wordsCount)
//         .sort((a, b) => b[1] - a[1])
//         .forEach(word => console.log(`${word[0]} - ${word[1]}`));
// }

solve([
'this sentence',
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)
