function addItem() {
    debugger
    const itemsElement = document.getElementById("items");
    const inputEl = document.getElementById("newItemText");
    const itemText = inputEl.value;
    const liElement = document.createElement("li");
    liElement.textContent = itemText;
    itemsElement.appendChild(liElement);

    const deleteButton = document.createElement("a");
    deleteButton.textContent = "[Delete]";
    deleteButton.href = "#";

    deleteButton.addEventListener("click", (e) => {
        e.currentTarget.parentElement.remove();
    });
    liElement.append(deleteButton);
    inputEl.value = "";
}
