window.addEventListener("load", solve);

function solve() {
    const placeInput = document.getElementById("place");
    const actionInput = document.getElementById("action");
    const personInput = document.getElementById("person");
    const addButton = document.getElementById("add-btn");
    const taskList = document.getElementById("task-list");
    const doneList = document.getElementById("done-list");

    addButton.addEventListener("click", createTaskList);

    function createTaskList(e) {
        if (!placeInput.value || !actionInput.value || !personInput.value) {
            return;
        }
        // e.preventDefault();

        const place = placeInput.value;
        const action = actionInput.value;
        const person = personInput.value;

        const liElement = createEl("li");
        liElement.classList.add("clean-task");

        const articleElement = createEl("article");

        const pPlaceElement = createEl("p");
        pPlaceElement.textContent = `Place:${place}`;

        const pActionElement = createEl("p");
        pActionElement.textContent = `Action:${action}`;

        const pPersonElement = createEl("p");
        pPersonElement.textContent = `Gender:${person}`;

        const divButtons = createEl("div");
        divButtons.className = "buttons";

        const editButtonEl = createEl("button");
        editButtonEl.classList.add("edit");
        editButtonEl.textContent = "Edit";
        editButtonEl.addEventListener("click", () => editInformation(liElement, place, action, person));

        const doneButtonEl = createEl("button");
        doneButtonEl.classList.add("done");
        doneButtonEl.textContent = "Done";
        doneButtonEl.addEventListener("click", () => saveInformation(liElement));

        articleElement.appendChild(pPlaceElement);
        articleElement.appendChild(pActionElement);
        articleElement.appendChild(pPersonElement);

        divButtons.appendChild(editButtonEl);
        divButtons.appendChild(doneButtonEl);

        liElement.appendChild(articleElement);
        liElement.appendChild(divButtons);

        taskList.appendChild(liElement);

        clearInputs(placeInput, actionInput, personInput);
    }

    function editInformation(liElement, place, action, person) {
        placeInput.value = place;
        actionInput.value = action;
        personInput.value = person;

        liElement.remove();
    }

    function saveInformation(liElement) {
        const buttonsDiv = liElement.querySelector(".buttons");
        buttonsDiv.remove();

        const deleteButtonEl = createEl("button");
        deleteButtonEl.classList.add("delete");
        deleteButtonEl.textContent = "Delete";
        deleteButtonEl.addEventListener("click", () => deleteInformation(liElement));

        liElement.appendChild(deleteButtonEl);
        doneList.appendChild(liElement);
    }

    function deleteInformation(liElement) {
        liElement.remove();
    }

    function createEl(tagName) {
        return document.createElement(tagName);
    }

    function clearInputs(field1, field2, field3) {
        field1.value = "";
        field2.value = "";
        field3.value = "";
    }
}
