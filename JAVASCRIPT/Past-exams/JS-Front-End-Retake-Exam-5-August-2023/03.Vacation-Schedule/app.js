const baseUrl = "http://localhost:3030/jsonstore/tasks";

const loadButton = document.getElementById("load-vacations");
const addButton = document.getElementById("add-vacation");
const editButton = document.getElementById("edit-vacation");
const vacationList = document.getElementById("list");
const formElement = document.querySelector("#form form");

const nameInput = document.getElementById("name");
const daysInput = document.getElementById("num-days");
const dateInput = document.getElementById("from-date");


loadButton.addEventListener("click", loadVacation);
addButton.addEventListener("click", addVacation);
editButton.addEventListener("click", editVacation);


async function addVacation(e) {
    const name = nameInput.value;
    const days = daysInput.value;
    const date = dateInput.value;

    e.preventDefault();

    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, days, date })
    });

    clearInputs(nameInput, daysInput, dateInput);
    await loadVacation();
}

async function editVacation() {
    const vacationId = formElement.getAttribute("data-vacation-id");

    const name = nameInput.value;
    const days = daysInput.value;
    const date = dateInput.value;

    clearInputs(nameInput, daysInput, dateInput);

    await fetch(`${baseUrl}/${vacationId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, days, date, _id: vacationId })
    });

    await loadVacation();

    editButton.setAttribute("disabled", "disabled");
    addButton.removeAttribute("disabled");
    formElement.removeAttribute("data-name-id");
}

async function loadVacation() {
    vacationList.innerHTML = "";

    const response = await fetch(baseUrl);
    const result = await response.json();
    const records = Object.values(result);

    const recordsElements = records.map(vacation => createEl(vacation.name, vacation.days, vacation.date, vacation._id));

    vacationList.append(...recordsElements);
}

function createEl(name, days, date, vacationId) {
    const h2NameElement = createTagEl("h2");
    h2NameElement.textContent = name;

    const h3DateElement = createTagEl("h3");
    h3DateElement.textContent = date;

    const h3DaysElement = createTagEl("h3");
    h3DaysElement.textContent = days;

    const divContainer = createTagEl("div");
    divContainer.classList.add("container");

    divContainer.appendChild(h2NameElement);
    divContainer.appendChild(h3DateElement);
    divContainer.appendChild(h3DaysElement);

    const changeButton = createTagEl("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";
    changeButton.addEventListener("click", () => {
        nameInput.value = name;
        daysInput.value = days;
        dateInput.value = date;

        editButton.removeAttribute("disabled");
        addButton.setAttribute("disabled", "disabled");
        formElement.setAttribute("data-vacation-id", vacationId);
    });

    const doneButton = createTagEl("button");
    doneButton.classList.add("done-btn");
    doneButton.textContent = "Done";
    doneButton.addEventListener("click", async() => {
        await fetch(`${baseUrl}/${vacationId}`, {
            method: "DELETE",
        });
        await loadVacation();
    })

    divContainer.appendChild(changeButton);
    divContainer.appendChild(doneButton);

    return divContainer;
}


function createTagEl(tagName) {
    return document.createElement(tagName);
}


function clearInputs(field1, field2, field3) {
    field1.value = "";
    field2.value = "";
    field3.value = "";
}

