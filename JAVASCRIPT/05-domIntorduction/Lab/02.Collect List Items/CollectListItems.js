function extractText() {
    const ulElement = document.getElementById('items');
    const resultElement = document.getElementById('result');
    const textResult = ulElement.innerText;

    resultElement.textContent = textResult;
}


// function extractText() {
//     let  textToExtract = Array.from(document.getElementsByTagName("li"));
//
//     let text = textToExtract.map( element => {
//         return element.textContent
//     }).join("\n");
//
//     document.getElementById("result").textContent = text;
// }
