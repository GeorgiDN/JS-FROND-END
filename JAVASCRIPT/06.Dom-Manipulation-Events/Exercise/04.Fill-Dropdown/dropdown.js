function addItem() {
    const itemText = document.getElementById("newItemText");
    const itemValue = document.getElementById("newItemValue");
    const dopDownMenu = document.getElementById("menu");
    const optionEl = document.createElement("option");
    optionEl.textContent = itemText.value;
    optionEl.value = itemValue.value;
    dopDownMenu.appendChild(optionEl);
    itemText.value = "";
    itemValue.value = "";
}
