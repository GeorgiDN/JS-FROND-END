const baseUrl = "http://localhost:3030/jsonstore/tasks";

const loadButton = document.getElementById("load-meals");
const addButton = document.getElementById("add-meal");
const editButton = document.getElementById("edit-meal");
const foodList = document.getElementById("list");
const formElement = document.querySelector("#form form");

const nameInput = document.getElementById("food");
const timeInput = document.getElementById("time");
const caloriesInput = document.getElementById("calories");


loadButton.addEventListener("click", loadFoods);
addButton.addEventListener("click", addFood);
editButton.addEventListener("click", editFood);

async function addFood() {
    const food = nameInput.value;
    const time = timeInput.value;
    const calories = caloriesInput.value;

    clearInputs();

    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({food, time, calories}),
    });

    await loadFoods();
}


async function editFood() {
    const foodId = formElement.getAttribute("data-food-id");

    const food = nameInput.value;
    const time = timeInput.value;
    const calories = caloriesInput.value;

    clearInputs();

    await fetch(`${baseUrl}/${foodId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({food, time, calories, _id: foodId})
    });
    await loadFoods();

    editButton.setAttribute("disabled", "disabled");
    addButton.removeAttribute("disabled");
    formElement.removeAttribute("data-food-id");
}

async function loadFoods() {
    foodList.innerHTML = "";
    const response = await fetch(baseUrl);
    const result = await response.json();
    const foods = Object.values(result)

    const foodElements = foods.map(e => createFoodElement(e.food, e.calories, e.time, e._id));

    foodList.append(...foodElements);
}

function createFoodElement(food, calories, time, foodId) {
    const hNameElement = document.createElement("h2");
    hNameElement.textContent = food;

    const hTimeElement = document.createElement("h3");
    hTimeElement.textContent = time;

    const hCaloriesElement = document.createElement("h3");
    hCaloriesElement.textContent = calories;

    const divContentElement = document.createElement("div");
    divContentElement.className = "meal";
    divContentElement.appendChild(hNameElement);
    divContentElement.appendChild(hTimeElement);
    divContentElement.appendChild(hCaloriesElement);

    const changeButton = document.createElement("button");
    changeButton.className = "change-meal";
    changeButton.textContent = "Change";
    changeButton.addEventListener("click", () => {
        nameInput.value = food;
        timeInput.value = time;
        caloriesInput.value = calories;

        editButton.removeAttribute("disabled");
        addButton.setAttribute("disabled", "disabled");
        formElement.setAttribute("data-food-id", foodId);

    })

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-meal";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", async () => {
        await fetch(`${baseUrl}/${foodId}`, {
            method: "DELETE",
        });
        await loadFoods();
    });

    const divButtons = document.createElement("div");
    divButtons.className = "meal-buttons";
    divButtons.appendChild(changeButton);
    divButtons.appendChild(deleteButton);

    divContentElement.appendChild(divButtons);

    return divContentElement;
}

function clearInputs() {
    nameInput.value = "";
    timeInput.value = "";
    caloriesInput.value = "";
}
