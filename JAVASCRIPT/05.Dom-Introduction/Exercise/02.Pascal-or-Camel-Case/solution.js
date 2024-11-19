function solve() {
    const validConventions = ["Camel Case", "Pascal Case"];
    const textInput = document.querySelector("#text").value.toLowerCase();
    const namingConvention = document.querySelector("#naming-convention").value;
    const resultSpanEl = document.querySelector(".result-container span");
    let output = "";

    if (!validConventions.includes(namingConvention)) {
        output = "Error!"

    } else {
        const wordsArr = textInput.split(" ");
        if (namingConvention === "Camel Case") {
            output += wordsArr.shift().toLowerCase();
        }
        output = textToUpperCase(wordsArr);
    }

    resultSpanEl.textContent = output;

    function textToUpperCase(wordsArr) {
        wordsArr.forEach((word) => {
            output += word[0].toUpperCase() + word.slice(1);
        });
        return output;
    }
}



// function solve () {
//     const validNamingConventions = ["Camel Case", "Pascal Case"];
//     const textInputEl = document.querySelector("#text");
//     const namingConventionEl = document.querySelector("#naming-convention");
//     const resultEl = document.querySelector(".result-container #result");
//
//     if (!validNamingConventions.includes(namingConventionEl.value)) {
//         resultEl.textContent = "Error!";
//         return;
//     }
//
//     const words = textInputEl.value.toLowerCase().split(" ");
//     let result = "";
//
//     if (namingConventionEl.value === "Camel Case") {
//         result = words[0] + words.slice(1)
//             .map(word => word[0].toUpperCase() + word.slice(1))
//             .join("")
//     } else if (namingConventionEl.value === "Pascal Case") {
//         result = words.map(word => word[0].toUpperCase() + word.slice(1)).join("");
//     }
//     resultEl.textContent = result;
// }
