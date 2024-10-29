function solve(input) {
    let inputArray = input.split(" ");
    let wordsCount = new Map();
    let result = [];

    inputArray.forEach(word => {
        word = word.toLowerCase();
        if (!wordsCount.has(word)) {
            wordsCount.set(word, 0);
        }
        wordsCount.set(word, wordsCount.get(word) + 1);
    });

    wordsCount.forEach((count, word) => {
        if (count % 2 !== 0) {
            result.push(word)
        }
    });
    console.log(result.join(" "));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

