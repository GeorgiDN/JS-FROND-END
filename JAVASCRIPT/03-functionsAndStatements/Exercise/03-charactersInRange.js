function charactersInRange(firstChar, secondChar) {
    let firstAsciiCode = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let secondAsciiCode = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let asciiSymbols = [];

    for (let index = firstAsciiCode + 1; index < secondAsciiCode; index++) {
        asciiSymbols.push(String.fromCharCode(index));
    }
    return  asciiSymbols.join(" ");
}

console.log(charactersInRange('a', 'd'));
console.log(charactersInRange('#', ':'));
console.log(charactersInRange('C', '#'));
