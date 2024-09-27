function stringSubstring(word, string) {
    string = string.toLowerCase();
    let newArray = string.split(" ");
    if (newArray.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript',
'JavaScript is the best programming language'
);

stringSubstring('python',
'JavaScript is the best programming language'
);
