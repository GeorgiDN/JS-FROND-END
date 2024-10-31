function checkPalindrome(numbersArray) {
    numbersArray.forEach(num => {
        if (isPalindrome(num)) {
            console.log(true);
        } else {
            console.log(false);
        }
    });

    function isPalindrome(num) {
        let str = num.toString();
        let reversedStr = str.split("").reverse().join("");
        return str === reversedStr;
    }
}

checkPalindrome([123,323,421,121]);
checkPalindrome([32,2,232,1010]);


// function checkPalindrome(numbersArray) {
//     const arrayToString = numbersArray.map(String);
//
//     for (let string of arrayToString) {
//         if (string === string.split("").reverse().join("")) {
//             console.log("true");
//         } else {
//             console.log("false");
//         }
//     }
// }
