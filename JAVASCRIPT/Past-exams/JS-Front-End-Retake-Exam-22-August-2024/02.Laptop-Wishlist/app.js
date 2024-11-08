window.addEventListener("load", solve);

function solve() {
    const laptopModelInput = document.getElementById("laptop-model");
    const storageInput = document.getElementById("storage");
    const priceInput = document.getElementById("price");
    const addButton = document.getElementById("add-btn");
    const checkList = document.getElementById("check-list");
    const laptopList = document.getElementById("laptops-list");
    const clearButton = document.querySelector(".btn.clear");

    addButton.addEventListener("click", createCheckList);
    clearButton.addEventListener("click",  clearContent);

    function createCheckList () {
        if (!laptopModelInput.value || !storageInput.value || !priceInput.value) {
            return;
        }

        const model = laptopModelInput.value
        const storage = storageInput.value;
        const price = priceInput.value;

        const liElement = createEl("li");
        const articleElement = createEl("article");

        const pModelElement = createEl("p");
        pModelElement.textContent = model;

        const pStorageElement = createEl("p");
        pStorageElement.textContent = `Memory: ${storage} TB`;

        const pPriceElement = createEl("p");
        pPriceElement.textContent = `Price: ${price}$`;

        const editButtonEl = createEl("button");
        editButtonEl.classList.add("btn", "edit");
        editButtonEl.textContent = "edit";
        editButtonEl.addEventListener("click", () => editInformation(liElement, model, storage, price));

        const okButtonEl = createEl("button");
        okButtonEl.classList.add("btn", "ok");
        okButtonEl.textContent = "ok";
        okButtonEl.addEventListener("click", () => saveInformation(liElement));

        articleElement.appendChild(pModelElement);
        articleElement.appendChild(pStorageElement);
        articleElement.appendChild(pPriceElement);

        liElement.appendChild(articleElement);
        liElement.appendChild(editButtonEl);
        liElement.appendChild(okButtonEl);
        liElement.classList.add("laptop-item");

        checkList.appendChild(liElement);

        clearInputs();

        addButton.setAttribute("disabled", "disabled");
    }

    function editInformation(liElement, model, storage, price) {
        laptopModelInput.value = model;
        storageInput.value = storage;
        priceInput.value = price;

        liElement.remove();
        addButton.removeAttribute("disabled");
    }

    function saveInformation(liElement) {
        const editButtonEL = liElement.querySelector(".btn.edit");
        const okButtonEL = liElement.querySelector(".btn.ok");
        editButtonEL.remove()
        okButtonEL.remove()

        laptopList.appendChild(liElement);
        addButton.removeAttribute("disabled");

    }

    function clearContent() {
        location.reload();
    }

    function createEl(tagName) {
        return document.createElement(tagName);
    }

    function clearInputs() {
        laptopModelInput.value = "";
        storageInput.value = "";
        priceInput.value = "";
    }
}
