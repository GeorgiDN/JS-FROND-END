document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const nextItemInput = document.getElementById("newItemText");
    const nextValueInput = document.getElementById("newItemValue");
    const addButton = document.querySelector("input[type='submit']")
    const selectMenu = document.getElementById("menu")

    addButton.addEventListener("click", (e) => {
        e.preventDefault();

        const optionElement = document.createElement("option");
        optionElement.textContent = nextItemInput.value;
        optionElement.value = nextValueInput.value;
        selectMenu.appendChild(optionElement);

        nextItemInput.value = "";
        nextValueInput.value = "";
    })
}
