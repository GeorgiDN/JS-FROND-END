function create(words) {
    const contentDivEl = document.getElementById("content");

    function createWordStructure(word) {
        const pEl = document.createElement("p");
        const divEl = document.createElement("div");
        pEl.textContent = word;
        pEl.style.display = "none";
        divEl.appendChild(pEl);
        return divEl;
    }

    for (let word of words) {
        const divEl = createWordStructure(word);
        divEl.addEventListener("click", (event) => {
            event.target.querySelector("p").style.display = "block";

        });
        contentDivEl.appendChild(divEl);
    }
}


// function create(words) {
//     const contentDivEl = document.getElementById("content");
//
//     words.forEach((word) => {
//         const pEl = document.createElement("p");
//         const divEl = document.createElement("div");
//
//         pEl.textContent = word;
//         pEl.style.display = "none";
//         divEl.appendChild(pEl);
//
//         divEl.addEventListener("click", (event) => {
//             event.target.querySelector("p").style.display = "block";
//         });
//         contentDivEl.appendChild(divEl);
//     });
// }
