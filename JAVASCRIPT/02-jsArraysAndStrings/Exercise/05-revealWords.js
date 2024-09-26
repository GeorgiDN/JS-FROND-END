function revealWords(wordsString, string) {
    let words = wordsString.split(", ");

    for (let word of words) {
        string = string.replace("*".repeat(word.length), word);
    }
    console.log(string);
}


// function revealWords(words, string) {
//     let wordsArray = words.split(", ").map(word => word.trim());
//     let templateArray = string.split(" ").map(word => word.trim());
//     for (let word of templateArray) {
//         if (word.startsWith("*")) {
//             for (let replacedWord of wordsArray) {
//                 if (replacedWord.length === word.length) {
//                     let index = templateArray.indexOf(word);
//                     templateArray[index] = replacedWord;
//                 }
//             }
//         }
//     }
//     console.log(templateArray.join(" "))
// }




revealWords('great',
'softuni is ***** place for learning new programming languages'
)

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)
