const baseUrl = "http://localhost:3030/jsonstore/gifts";

const loadButton = document.getElementById("load-presents");
const addButton = document.getElementById("add-present");
const editButton = document.getElementById("edit-present");
const giftsList = document.getElementById("gift-list");
const formElement = document.querySelector("#form form");

const presentInput = document.getElementById("gift");
const forInput = document.getElementById("for");
const priceInput = document.getElementById("price");


loadButton.addEventListener("click", loadPresents);
addButton.addEventListener("click", addPresent);
editButton.addEventListener("click", editPresent);


async function addPresent() {
    const gift = gameNameInput.value;
    const forWhom = gameTypeInput.value;
    const price = maxPlayersInput.value;

    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ gift, for: forWhom, price })
    });

    clearInputs(gameNameInput, gameTypeInput, maxPlayersInput);
    await loadPresents();
}

async function editPresent() {
    const giftId = formElement.getAttribute("data-gift-id");

    const gift = gameNameInput.value;
    const forWhom = gameTypeInput.value;
    const price = maxPlayersInput.value;

    clearInputs(gameNameInput, gameTypeInput, maxPlayersInput);

    await fetch(`${baseUrl}/${giftId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ gift, for: forWhom, price, _id: giftId })
    });

    await loadPresents();

    editButton.setAttribute("disabled", "disabled");
    addButton.removeAttribute("disabled");
    formElement.removeAttribute("data-gift-id");
}

async function loadPresents() {
    giftsList.innerHTML = "";

    const response = await fetch(baseUrl);
    const result = await response.json();
    const records = Object.values(result);

    const recordsElements = records.map(present => createEl(present.gift, present.for, present.price, present._id));

    giftsList.append(...recordsElements);
}

function createEl(gift, forWhom, price, giftId) {
    const pGiftElement = createTagEl("p");
    pGiftElement.textContent = gift;

    const pForElement = createTagEl("p");
    pForElement.textContent = forWhom;

    const pPriceElement = createTagEl("p");
    pPriceElement.textContent = price;

    const divContent = createTagEl("div");
    divContent.classList.add("content");

    const divSock = createTagEl("div");
    divSock.classList.add("gift-sock");
    divContent.appendChild(pGiftElement);
    divContent.appendChild(pForElement);
    divContent.appendChild(pPriceElement);

    divSock.appendChild(divContent);

    const divButtons = createTagEl("div");
    divButtons.classList.add("buttons-container");

    const changeButton = createTagEl("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";
    changeButton.addEventListener("click", () => {
        gameNameInput.value = gift;
        gameTypeInput.value = forWhom;
        maxPlayersInput.value = price;

        editButton.removeAttribute("disabled");
        addButton.setAttribute("disabled", "disabled");
        formElement.setAttribute("data-gift-id", giftId);
    });

    const deleteButton = createTagEl("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", async() => {
        await fetch(`${baseUrl}/${giftId}`, {
            method: "DELETE",
        });
        await loadPresents();
    })

    divButtons.appendChild(changeButton);
    divButtons.appendChild(deleteButton);

    divSock.appendChild(divButtons);

    return divSock;
}


function createTagEl(tagName) {
    return document.createElement(tagName);
}


function clearInputs(field1, field2, field3) {
    field1.value = "";
    field2.value = "";
    field3.value = "";
}
