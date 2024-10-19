function solve() {
    const inputEl = document.getElementById("input").value.trim();
    const outputEl = document.getElementById("output");
    let allSentences = inputEl.split(".").filter(Boolean).map(sentence => sentence.trim());

    for (let i = 0; i < allSentences.length; i += 3) {
        let sentenceGroup = allSentences.slice(i, i + 3).join(".").concat(".");
        let paragraphEl = document.createElement("p");
        paragraphEl.textContent = sentenceGroup;
        outputEl.appendChild(paragraphEl);
    }
}
