function solve () {
    const validNamingConventions = ["Camel Case", "Pascal Case"];
    const textInputEl = document.querySelector("#text");
    const namingConventionEl = document.querySelector("#naming-convention");
    const resultEl = document.querySelector(".result-container #result");

    if (!validNamingConventions.includes(namingConventionEl.value)) {
        resultEl.textContent = "Error!";
        return;
    }

    const words = textInputEl.value.toLowerCase().split(" ");
    let result = "";

    if (namingConventionEl.value === "Camel Case") {
        result = words[0] + words.slice(1)
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join("")
    } else if (namingConventionEl.value === "Pascal Case") {
        result = words.map(word => word[0].toUpperCase() + word.slice(1)).join("");
    }
    resultEl.textContent = result;
}
