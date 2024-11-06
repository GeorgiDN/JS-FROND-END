window.addEventListener("load", solve);

function solve() {
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const categoryInput = document.getElementById("category");
    const addButton = document.getElementById("add-btn");
    const checkListEl = document.getElementById("check-list");
    const contactListEl = document.getElementById("contact-list");

    addButton.addEventListener("click", createCheckList)

    function createCheckList () {
        if (!nameInput.value || !phoneInput.value || !categoryInput.value) {
            return;
        }

        const name = nameInput.value;
        const phone = phoneInput.value;
        const category = categoryInput.value;

        const liElement = createEl("li");
        const articleElement = createEl("article");

        const pNameElement = createEl("p");
        pNameElement.textContent = `name:${name}`;

        const pPhoneElement = createEl("p");
        pPhoneElement.textContent = `phone:${phone}`;

        const pCategoryElement = createEl("p");
        pCategoryElement.textContent = `category:${category}`;

        const divButtnos = createEl("div");
        divButtnos.className = "buttons";

        const editButtonEl = createEl("button");
        editButtonEl.className = "edit-btn";
        editButtonEl.addEventListener("click", () => editInformation(liElement, name, phone, category));

        const saveButtonEl = createEl("button");
        saveButtonEl.className = "save-btn";
        saveButtonEl.addEventListener("click", () => saveInformation(liElement));

        articleElement.appendChild(pNameElement);
        articleElement.appendChild(pPhoneElement);
        articleElement.appendChild(pCategoryElement);

        divButtnos.appendChild(editButtonEl);
        divButtnos.appendChild(saveButtonEl);

        liElement.appendChild(articleElement);
        liElement.appendChild(divButtnos);

        checkListEl.appendChild(liElement);

        nameInput.value = "";
        phoneInput.value = "";
        categoryInput.value = "";
    }

    function editInformation(liElement, name, phone, category) {
        nameInput.value = name;
        phoneInput.value = phone;
        categoryInput.value = category;

        liElement.remove();
    }

    function saveInformation(liElement) {
        const buttonsDiv = liElement.querySelector(".buttons");
        buttonsDiv.innerHTML = "";

        const deleteButtonEl = createEl("button");
        deleteButtonEl.className = "del-btn";
        deleteButtonEl.addEventListener("click", () => deleteInformation(liElement));

        liElement.appendChild(deleteButtonEl);
        contactListEl.appendChild(liElement);
    }

    function deleteInformation(liElement) {
        liElement.remove();
    }

    function createEl(tagName) {
        return document.createElement(tagName);
    }
}
