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

async function loadCars() {
    appointmentsList.innerHTML = ""

    const response = await fetch(baseUrl);
    const result = await response.json();
    const cars = Object.values(result);

    const carElements = cars.map(car => createCarElement(car.model, car.service , car.date, car._id));

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
    // changeButton.addEventListener("click", () => {
    //
    // })

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    // deleteButton.addEventListener("click", () => {
    //
    // })

    const divButtons = document.createElement("div");
    divButtons.className = "buttons-appointment";
    divButtons.appendChild(changeButton);
    divButtons.appendChild(deleteButton);

    liElement.appendChild(divButtons);

    return liElement;


}
