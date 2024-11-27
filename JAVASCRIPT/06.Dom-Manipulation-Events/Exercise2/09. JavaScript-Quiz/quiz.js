document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const rightAnswers = [
        "onclick",
        "JSON.stringify()",
        "A programming API for HTML and XML documents"
    ];
    const sectionsEl = document.querySelectorAll("section");
    const result = document.querySelector("#results");
    let countRightAnswers = 0;
    let currentSectionIndex = 0;

    sectionsEl.forEach((section, index) => {
        const listAnswers = section.querySelectorAll("li");
        listAnswers.forEach(answer => {
            answer.addEventListener("click", () => {
                if (rightAnswers.includes(answer.textContent)) {
                    countRightAnswers++;
                }

                sectionsEl[index].classList.add("hidden");
                currentSectionIndex++;

                if (currentSectionIndex < sectionsEl.length) {
                    sectionsEl[currentSectionIndex].classList.remove("hidden");
                } else {
                    if (countRightAnswers === sectionsEl.length) {
                        result.textContent = "You are recognized as top JavaScript fan!";
                    } else if (countRightAnswers === 1) {
                        result.textContent = `You have ${countRightAnswers} right answer`;
                    } else {
                        result.textContent = `You have ${countRightAnswers} right answers`;
                    }
                    result.style.display = "block";
                }
            });
        });
    });
}
