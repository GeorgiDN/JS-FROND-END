document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const form = document.getElementById('task-input');
    const contentDiv = document.getElementById('content');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const inputField = form.querySelector('input[type="text"]');
        const sections = inputField.value.split(',').map(section => section.trim());

        contentDiv.innerHTML = '';

        sections.forEach(section => {
            const div = document.createElement('div');
            const paragraph = document.createElement('p');
            paragraph.textContent = section;
            div.appendChild(paragraph);
            contentDiv.appendChild(div);
        });
    });
}
