function censoredWords (text, searchedWord) {
    while (text.includes(searchedWord)) {
        text = text.replace(searchedWord, "*".repeat(searchedWord.length));
    }
    console.log(text)
}

censoredWords('A small sentence with some small words', 'small');



// function censoredWords(text, searchedWord) {
//     let regex = new RegExp(searchedWord, 'g');
//     let censoredText = text.replace(regex, '*'.repeat(searchedWord.length));
//     console.log(censoredText);
// }


