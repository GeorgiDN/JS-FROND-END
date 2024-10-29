function addItem() {
    const itemsEl = document.getElementById("items");
    const inputEl = document.getElementById("newItemText");
    const itemText = inputEl.value;
    const liEl = document.createElement("li");
    liEl.textContent = itemText;
    itemsEl.append(liEl);
    inputEl.value = "";
}
