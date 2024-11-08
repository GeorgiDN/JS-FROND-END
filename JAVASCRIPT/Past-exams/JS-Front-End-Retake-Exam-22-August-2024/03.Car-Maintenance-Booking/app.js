const baseUrl = "http://localhost:3030/jsonstore/appointments";

const loadButton = document.getElementById("load-appointments");
const addButton = document.getElementById("add-appointment");
const editButton = document.getElementById("edit-appointment");
const appointmentsList = document.getElementById("appointments-list");
const formElement = document.querySelector("#form form");

const carModelInput = document.getElementById("car-model");
const carServiceInput = document.getElementById("car-service");
const dateInput = document.getElementById("date");

loadButton.addEventListener("click", loadCars);
addButton.addEventListener("click", addAppointment);
editButton.addEventListener("click", editAppointment);

async function addAppointment() {
    const model = carModelInput.value;
    const service = carServiceInput.value;
    const date = dateInput.value;

    clearInputs();

    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({model, service, date}),
    });

    await loadCars();
}

async function editAppointment() {
    const carId = formElement.getAttribute("data-car-id");

    const model = carModelInput.value;
    const service = carServiceInput.value;
    const date = dateInput.value;

    clearInputs();

    await fetch(`${baseUrl}/${carId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({model, service, date, _id: carId}),
    });
    await loadCars();

    editButton.setAttribute("disabled", "disabled");
    addButton.removeAttribute("disabled");
    formElement.removeAttribute("data-car-id");
}

async function loadCars() {
    appointmentsList.innerHTML = ""

    const response = await fetch(baseUrl);
    const result = await response.json();
    const cars = Object.values(result);

    const carElements = cars.map(car => createCarElement(car.model, car.service, car.date, car._id));

    appointmentsList.append(...carElements);
}

function createCarElement(model, service, date, carId) {
    const hModelElement = document.createElement("h2");
    hModelElement.textContent = model;

    const hServiceElement = document.createElement("h3");
    hServiceElement.textContent = service;

    const hDateElement = document.createElement("h3");
    hDateElement.textContent = date;

    const liElement = document.createElement("li");
    liElement.className = "appointment";
    liElement.appendChild(hModelElement);
    liElement.appendChild(hDateElement);
    liElement.appendChild(hServiceElement);

    const changeButton = document.createElement("button");
    changeButton.className = "change-btn";
    changeButton.textContent = "Change";
    changeButton.addEventListener("click", () => {
        carModelInput.value = model
        carServiceInput.value = service;
        dateInput.value = date;

        editButton.removeAttribute("disabled");
        addButton.setAttribute("disabled", "disabled");
        formElement.setAttribute("data-car-id", carId);
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", async () => {
        await fetch(`${baseUrl}/${carId}`, {
            method: "DELETE",
        });
        await loadCars();
    });

    const divButtons = document.createElement("div");
    divButtons.className = "buttons-appointment";
    divButtons.appendChild(changeButton);
    divButtons.appendChild(deleteButton);

    liElement.appendChild(divButtons);

    return liElement;
}

function clearInputs() {
    carModelInput.value = "";
    carServiceInput.value = "";
    dateInput.value = "";
}
