document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const formEl = document.getElementById("task-input");
    const contentEl = document.getElementById("content");

    formEl.addEventListener("submit", (e) => {
        e.preventDefault();

        const sections = formEl.querySelector('input[type="text"]').value.split(", ");

        sections.forEach(el => {
            const newDivEl = document.createElement("div");
            const newPEl = document.createElement("p");

            newPEl.textContent = el;
            newPEl.style.display = "none";

            newDivEl.append(newPEl);
            newDivEl.addEventListener("click", (e) => {
                e.target.querySelector("p").style.display = "block";
            });
            contentEl.append(newDivEl);
        });
    });
}



// function solve() {
//     const form = document.getElementById('task-input');
//     const contentDiv = document.getElementById('content');
//
//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
//
//         const inputField = form.querySelector('input[type="text"]');
//         const sections = inputField.value.split(',').map(section => section.trim());
//
//         contentDiv.innerHTML = '';
//
//         sections.forEach(section => {
//             const div = document.createElement('div');
//             const paragraph = document.createElement('p');
//             paragraph.textContent = section;
//             div.appendChild(paragraph);
//             contentDiv.appendChild(div);
//         });
//     });
// }
