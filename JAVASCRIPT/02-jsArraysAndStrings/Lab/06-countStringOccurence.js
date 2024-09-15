function countOccurrences (text = "", string) {
    let pattern = new RegExp(`\\b${string}\\b`, "g");
    let result = text.match(pattern);
    console.log(result.length)
}

countOccurrences('This is a word and it also is a sentence', 'is')
countOccurrences('softuni is great place for learning new programming languages', 'softuni')




// function countOccurrences (text, string) {
//     let arr = text.split(" ");
//     let count = arr.filter(item => item === string).length;
//     console.log(count)
// }
//




// function countOccurrences(text, string) {
//     let words = text.split(" ");
//     let count = 0;
//
//     for (let word of words) {
//         if (word === string) count += 1;
//     }
//
//     console.log(count);
// }

