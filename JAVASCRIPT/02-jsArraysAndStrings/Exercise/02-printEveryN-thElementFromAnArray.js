function printNthElement(stringsArray, step) {
    let newArray = [];

    for (let i = 0; i < stringsArray.length; i += step) {
        newArray.push(stringsArray[i]);
    }

    return newArray;
}

