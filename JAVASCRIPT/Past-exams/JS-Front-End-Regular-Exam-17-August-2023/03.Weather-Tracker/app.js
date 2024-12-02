const baseUrl = "http://localhost:3030/jsonstore/tasks";

const loadButton = document.getElementById("load-history");
const addButton = document.getElementById("add-weather");
const editButton = document.getElementById("edit-weather");
const whetherList = document.getElementById("list");
const formElement = document.querySelector("#form form");

const locationInput = document.getElementById("location");
const temperatureInput = document.getElementById("temperature");
const dateInput = document.getElementById("date");

loadButton.addEventListener("click", loadWhether);
addButton.addEventListener("click", addWhether);
editButton.addEventListener("click", editWhether);

async function addWhether() {
    const location = locationInput.value;
    const temperature = temperatureInput.value;
    const date = dateInput.value;

    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ location, temperature, date})
    });

    clearInputs(locationInput, temperatureInput, dateInput);
    await loadWhether();
}

async function editWhether() {
    const whetherId = formElement.getAttribute("data-whether-id");

    const location = locationInput.value;
    const temperature = temperatureInput.value;
    const date = dateInput.value;

    clearInputs(locationInput, temperatureInput, dateInput);

    await fetch(`${baseUrl}/${whetherId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ location, temperature, date, _id: whetherId })
    });

    await loadWhether();

    editButton.setAttribute("disabled", "disabled");
    addButton.removeAttribute("disabled");
    formElement.removeAttribute("data-whether-id");
}

async function loadWhether() {
    whetherList.innerHTML = "";

    const response = await fetch(baseUrl);
    const result = await response.json();
    const records = Object.values(result);

    const recordsElements = records.map(whether => createEl(whether.location, whether.temperature, whether.date, whether._id));

    whetherList.append(...recordsElements);
}

function createEl(location, temperature, date, whetherId) {
    const h2LocationElement = createTagEl("h2");
    h2LocationElement.textContent = location;

    const h3DateElement = createTagEl("h3");
    h3DateElement.textContent = date;

    const h3TemperatureElement = createTagEl("h3");
    h3TemperatureElement.id = "celsius";
    h3TemperatureElement.textContent = temperature;

    const divContainer = createTagEl("div");
    divContainer.classList.add("container");

    divContainer.appendChild(h2LocationElement);
    divContainer.appendChild(h3DateElement);
    divContainer.appendChild(h3TemperatureElement);

    const divButtons = createTagEl("div");
    divButtons.classList.add("buttons-container");

    const changeButton = createTagEl("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";
    changeButton.addEventListener("click", () => {
        locationInput.value = location;
        temperatureInput.value = temperature;
        dateInput.value = date;

        editButton.removeAttribute("disabled");
        addButton.setAttribute("disabled", "disabled");
        formElement.setAttribute("data-whether-id", whetherId);
    });

    const deleteButton = createTagEl("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", async() => {
        await fetch(`${baseUrl}/${whetherId}`, {
            method: "DELETE",
        });
        await loadWhether();
    })

    divButtons.appendChild(changeButton);
    divButtons.appendChild(deleteButton);

    divContainer.appendChild(divButtons);

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
