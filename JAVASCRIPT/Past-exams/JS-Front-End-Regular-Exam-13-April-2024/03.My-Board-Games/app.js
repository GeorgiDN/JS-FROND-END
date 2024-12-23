const baseUrl = "http://localhost:3030/jsonstore/games";

const loadButton = document.getElementById("load-games");
const addButton = document.getElementById("add-game");
const editButton = document.getElementById("edit-game");
const gamesList = document.getElementById("games-list");
const formElement = document.querySelector("#form form");

const gameNameInput = document.getElementById("g-name");
const gameTypeInput = document.getElementById("type");
const maxPlayersInput = document.getElementById("players");


loadButton.addEventListener("click", loadGames);
addButton.addEventListener("click", addGame);
editButton.addEventListener("click", editGame);


async function addGame() {
    const name = gameNameInput.value;
    const type = gameTypeInput.value;
    const players = maxPlayersInput.value;

    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, type, players })
    });

    clearInputs(gameNameInput, gameTypeInput, maxPlayersInput);
    await loadGames();
}

async function editGame() {
    const gameId = formElement.getAttribute("data-game-id");

    const name = gameNameInput.value;
    const type = gameTypeInput.value;
    const players = maxPlayersInput.value;

    clearInputs(gameNameInput, gameTypeInput, maxPlayersInput);

    await fetch(`${baseUrl}/${gameId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, type, players, _id: gameId })
    });

    await loadGames();

    editButton.setAttribute("disabled", "disabled");
    addButton.removeAttribute("disabled");
    formElement.removeAttribute("data-game-id");
}

async function loadGames() {
    gamesList.innerHTML = "";

    const response = await fetch(baseUrl);
    const result = await response.json();
    const records = Object.values(result);

    const recordsElements = records.map(game => createEl(game.name, game.type, game.players, game._id));

    gamesList.append(...recordsElements);
}

function createEl(name, type, players, gameId) {
    const divBoardGame = createTagEl("div");
    divBoardGame.classList.add("board-game");

    const divContent = createTagEl("div");
    divContent.classList.add("content");

    const pNameElement = createTagEl("p");
    pNameElement.textContent = name;

    const pPlayersElement = createTagEl("p");
    pPlayersElement.textContent = players;

    const pTypeElement = createTagEl("p");
    pTypeElement.textContent = type;

    divContent.append(pNameElement, pPlayersElement, pTypeElement);
    
    const divButtons = createTagEl("div");
    divButtons.classList.add("buttons-container");

    const changeButton = createTagEl("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";
    changeButton.addEventListener("click", () => {
        gameNameInput.value = name;
        gameTypeInput.value = type;
        maxPlayersInput.value = players;

        editButton.removeAttribute("disabled");
        addButton.setAttribute("disabled", "disabled");
        formElement.setAttribute("data-game-id", gameId);
    });

    const deleteButton = createTagEl("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", async() => {
        await fetch(`${baseUrl}/${gameId}`, {
            method: "DELETE",
        });
        await loadGames();
    })

    divButtons.append(changeButton, deleteButton);
    divBoardGame.append(divContent, divButtons);

    return divBoardGame;
}

function createTagEl(tagName) {
    return document.createElement(tagName);
}

function clearInputs(...fields) {
    for (let field of fields) {
        field.value = "";
    }
}




// const baseUrl = `http://localhost:3030/jsonstore/games`;

// const loadButton = document.getElementById("load-games");
// const addButton = document.getElementById("add-game");
// const editButton = document.getElementById("edit-game");
// const gameList = document.getElementById("games-list");
// const formElement = document.querySelector("#form form");

// const nameInput = document.getElementById("g-name");
// const typeInput = document.getElementById("type");
// const playersInput = document.getElementById("players");

// loadButton.addEventListener("click", loadGames);
// addButton.addEventListener("click", addGame);
// editButton.addEventListener("click", editGame);

// async function addGame() {
//     const name = nameInput.value;
//     const type = typeInput.value;
//     const players = playersInput.value;

//     clearInputs();

//     await fetch(baseUrl, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({name, type, players}),
//     });

//     await loadGames();
// }

// async function editGame() {
//     const gameId = formElement.getAttribute("data-game-id");

//     const name = nameInput.value;
//     const type = typeInput.value;
//     const players = playersInput.value;

//     clearInputs();

//     await fetch(`${baseUrl}/${gameId}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({name, type, players, _id: gameId}),
//     });

//     await loadGames();

//     editButton.setAttribute("disabled", "disabled");
//     addButton.removeAttribute("disabled");
//     formElement.removeAttribute("data-game-id");
// }

// async function loadGames() {
//     gameList.innerHTML = "";

//     const response = await fetch(baseUrl);
//     const result = await response.json();
//     const games = Object.values(result)

//     const gameElements = games.map(game => createGameElement(game.name, game.type, game.players, game._id));

//     gameList.append(...gameElements);
// }

// function createGameElement(name, type, players, gameId) {
//     const pNameElement = document.createElement("p");
//     pNameElement.textContent = name;

//     const pTypeElement = document.createElement("p");
//     pTypeElement.textContent = type;

//     const pMaxPlayersElement = document.createElement("p");
//     pMaxPlayersElement.textContent = players;

//     const divContentElement = document.createElement("div");
//     divContentElement.className = "content";
//     divContentElement.appendChild(pNameElement);
//     divContentElement.appendChild(pTypeElement);
//     divContentElement.appendChild(pMaxPlayersElement);

//     const changeButton = document.createElement("button");
//     changeButton.className = "change-btn";
//     changeButton.textContent = "Change";
//     changeButton.addEventListener("click", () => {
//         nameInput.value = name;
//         typeInput.value = type;
//         playersInput.value = players;

//         editButton.removeAttribute("disabled");
//         addButton.setAttribute("disabled", "disabled");
//         formElement.setAttribute("data-game-id", gameId);

//     });

//     const deleteButton = document.createElement("button");
//     deleteButton.className = "delete-btn";
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", async () => {
//         await fetch(`${baseUrl}/${gameId}`, {
//             method: "DELETE",
//         });
//         await loadGames();
//     });

//     const divButtons = document.createElement("div");
//     divButtons.className = "buttons-container";
//     divButtons.appendChild(changeButton);
//     divButtons.appendChild(deleteButton);

//     const gameDivElement = document.createElement("div");
//     gameDivElement.className = "board-game";
//     gameDivElement.appendChild(divContentElement);
//     gameDivElement.appendChild(divButtons);

//     return gameDivElement;
// }

// function clearInputs() {
//     nameInput.value = "";
//     typeInput.value = "";
//     playersInput.value = "";
// }
