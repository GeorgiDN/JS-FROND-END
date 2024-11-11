window.addEventListener("load", solve);

function solve() {
    const eventNameInput = document.getElementById("name");
    const dateTimeInput = document.getElementById("time");
    const descriptionInput = document.getElementById("description");
    const addButton = document.getElementById("add-btn");
    const previewList = document.getElementById("preview-list");
    const archiveList = document.getElementById("archive-list");

    addButton.addEventListener("click", createPreviewList);

    function createPreviewList() {
        if (!eventNameInput.value || !dateTimeInput.value || !descriptionInput.value) {
            return;
        }

        const eventName = eventNameInput.value;
        const dateTime = dateTimeInput.value;
        const description = descriptionInput.value;

        const liElement = createEl("li");
        const articleElement = createEl("article");

        const pEventNameElement = createEl("p");
        pEventNameElement.textContent = eventName;

        const pDateTimeElement = createEl("p");
        pDateTimeElement.textContent = dateTime;

        const pDescriptionElement = createEl("p");
        pDescriptionElement.textContent = description;

        const divButtons = createEl("div");
        divButtons.className = "buttons";

        const editButtonEl = createEl("button");
        editButtonEl.classList.add("edit-btn");
        editButtonEl.textContent = "Edit";
        editButtonEl.addEventListener("click", () => editInformation(liElement, eventName, dateTime, description));

        const nextButtonEl = createEl("button");
        nextButtonEl.classList.add("next-btn");
        nextButtonEl.textContent = "Next";
        nextButtonEl.addEventListener("click", () => saveInformation(liElement));

        articleElement.appendChild(pEventNameElement);
        articleElement.appendChild(pDateTimeElement);
        articleElement.appendChild(pDescriptionElement);

        divButtons.appendChild(editButtonEl);
        divButtons.appendChild(nextButtonEl);

        liElement.appendChild(articleElement);
        liElement.appendChild(divButtons);

        previewList.appendChild(liElement);

        clearInputs();

        addButton.setAttribute("disabled", "disabled");

    }

    function editInformation(liElement, expenseType, amount, date) {
        eventNameInput.value = expenseType;
        dateTimeInput.value = amount;
        descriptionInput.value = date;

        liElement.remove();
        addButton.removeAttribute("disabled");
    }

    function saveInformation(liElement) {
        const buttonsDiv = liElement.querySelector(".buttons");
        buttonsDiv.remove();

        const archiveButtonEl = createEl("button");
        archiveButtonEl.className = "archive-btn";
        archiveButtonEl.textContent = "Archive";
        archiveButtonEl.addEventListener("click", () => deleteInformation(liElement));

        liElement.appendChild(archiveButtonEl);

        archiveList.appendChild(liElement);
        addButton.removeAttribute("disabled");
    }

    function deleteInformation(liElement) {
        liElement.remove();
        addButton.removeAttribute("disabled")
    }

    function createEl(tagName) {
        return document.createElement(tagName);
    }

    function clearInputs() {
        eventNameInput.value = "";
        dateTimeInput.value = "";
        descriptionInput.value = "";
    }
}
