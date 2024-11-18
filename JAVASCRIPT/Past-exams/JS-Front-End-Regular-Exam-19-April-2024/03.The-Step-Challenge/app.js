const baseUrl = "http://localhost:3030/jsonstore/records";

const loadButton = document.getElementById("load-records");
const addButton = document.getElementById("add-record");
const editButton = document.getElementById("edit-record");
const recordList = document.getElementById("list");
const formElement = document.querySelector("#form form");

const nameHostInput = document.getElementById("p-name");
const stepsInput = document.getElementById("steps");
const caloriesInput = document.getElementById("calories");

loadButton.addEventListener("click", loadRecords);
addButton.addEventListener("click", addRecord);
editButton.addEventListener("click", editRecord);

async function addRecord() {
    const name = nameHostInput.value;
    const steps = stepsInput.value;
    const calories = caloriesInput.value;

    clearInputs(nameHostInput, stepsInput, caloriesInput);

    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, steps, calories})
    });

    await loadRecords();
}

async function editRecord() {
    const recordId = formElement.getAttribute("data-record-id");

    const name = nameHostInput.value;
    const steps = stepsInput.value;
    const calories = caloriesInput.value;

    clearInputs(nameHostInput, stepsInput, caloriesInput);

    await fetch(`${baseUrl}/${recordId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, steps, calories, _id: recordId})
    });

    await loadRecords();

    editButton.setAttribute("disabled", "disabled");
    addButton.removeAttribute("disabled");
    formElement.removeAttribute("data-record-id");
}


async function loadRecords() {
    recordList.innerHTML = "";

    const response = await fetch(baseUrl);
    const result = await response.json();
    const records = Object.values(result);

    const recordsElements = records.map(r => createEl(r.name, r.steps, r.calories, r._id));

    recordList.append(...recordsElements);
}

function createEl(name, steps, calories, recordId) {
    const pNameElement = createTagEl("p");
    pNameElement.textContent = name;

    const pStepsElement = createTagEl("p");
    pStepsElement.textContent = steps;

    const pCaloriesElement = createTagEl("p");
    pCaloriesElement.textContent = calories;

    const divContent = createTagEl("div");
    divContent.classList.add("info");

    const liElement = createTagEl("li");
    liElement.classList.add("record");
    divContent.appendChild(pNameElement);
    divContent.appendChild(pStepsElement);
    divContent.appendChild(pCaloriesElement);

    liElement.appendChild(divContent);

    const divButtons = createTagEl("div");
    divButtons.classList.add("btn-wrapper");

    const changeButton = createTagEl("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";
    changeButton.addEventListener("click", () => {
        nameHostInput.value = name;
        stepsInput.value = steps;
        caloriesInput.value = calories;

        editButton.removeAttribute("disabled");
        addButton.setAttribute("disabled", "disabled");
        formElement.setAttribute("data-record-id", recordId);
    });

    const deleteButton = createTagEl("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", async() => {
        await fetch(`${baseUrl}/${recordId}`, {
            method: "DELETE",
        });
        await loadRecords();
    })

    divButtons.appendChild(changeButton);
    divButtons.appendChild(deleteButton);

    liElement.appendChild(divButtons);

    return liElement;
}


function createTagEl(tagName) {
    return document.createElement(tagName);
}


function clearInputs(field1, field2, field3) {
    field1.value = "";
    field2.value = "";
    field3.value = "";
}
