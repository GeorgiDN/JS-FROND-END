function solve(inputArray) {
    let uniqueArrays = [];

    function arrayContainAll(arr1, arr2) {
        return arr2.every(num => arr1.includes(num));
    }

    inputArray.forEach((row) => {
        let parsedRow = JSON.parse(row);
        let isUnique = true;

        uniqueArrays.forEach((arr) => {
            if (arrayContainAll(arr, parsedRow)) {
                isUnique = false;
            }
        });

        if (isUnique) {
            uniqueArrays.push(parsedRow);
        }
    });

    uniqueArrays.sort((arr1, arr2) => arr1.length - arr2.length)
    .forEach((arr) => {
        arr.sort((a, b) => b - a);
        console.log(`[${arr.join(", ")}]`)
    });
}


solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
)

// solve(["[7.14, 7.180, 7.339, 80.099]",
// "[7.339, 80.0990, 7.140000, 7.18]",
// "[7.339, 7.180, 7.14, 80.099]"]
// )
