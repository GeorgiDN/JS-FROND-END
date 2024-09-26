function findSpecialWords(string) {
    let stringArray = string.split(" ");
    let specialWords = [];
    let regexPattern = /#[A-Za-z]/;

    for (let word of stringArray) {
        if (word.match(regexPattern)) {
            specialWords.push(word.slice(1));
        }
    }
    console.log(specialWords.join("\n"));
}

findSpecialWords('Nowadays everyone uses # to tag a #special word in #socialMedia')
