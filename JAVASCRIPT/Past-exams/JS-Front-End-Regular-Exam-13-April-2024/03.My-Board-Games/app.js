const baseUrl = `http://localhost:3030/jsonstore/games`;

const loadButton = document.getElementById("load-games");
const addButton = document.getElementById("add-game");
const editButton = document.getElementById("edit-game");
const gameList = document.getElementById("games-list");
const formElement = document.querySelector("#form form");

const nameInput = document.getElementById("g-name");
const typeInput = document.getElementById("type");
const playersInput = document.getElementById("players");

loadButton.addEventListener("click", loadGames);
addButton.addEventListener("click", addGame);
editButton.addEventListener("click", editGame);

async function addGame() {
    const name = nameInput.value;
    const type = typeInput.value;
    const players = playersInput.value;

    clearInputs();

    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, type, players}),
    });

    await loadGames();
}

async function editGame() {
    const gameId = formElement.getAttribute("data-game-id");

    const name = nameInput.value;
    const type = typeInput.value;
    const players = playersInput.value;

    clearInputs();

    await fetch(`${baseUrl}/${gameId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, type, players, _id: gameId}),
    });

    await loadGames();

    editButton.setAttribute("disabled", "disabled");
    addButton.removeAttribute("disabled");
    formElement.removeAttribute("data-game-id");
}

async function loadGames() {
    gameList.innerHTML = "";

    const response = await fetch(baseUrl);
    const result = await response.json();
    const games = Object.values(result)

    const gameElements = games.map(game => createGameElement(game.name, game.type, game.players, game._id));

    gameList.append(...gameElements);
}

function createGameElement(name, type, players, gameId) {
    const pNameElement = document.createElement("p");
    pNameElement.textContent = name;

    const pTypeElement = document.createElement("p");
    pTypeElement.textContent = type;

    const pMaxPlayersElement = document.createElement("p");
    pMaxPlayersElement.textContent = players;

    const divContentElement = document.createElement("div");
    divContentElement.className = "content";
    divContentElement.appendChild(pNameElement);
    divContentElement.appendChild(pTypeElement);
    divContentElement.appendChild(pMaxPlayersElement);

    const changeButton = document.createElement("button");
    changeButton.className = "change-btn";
    changeButton.textContent = "Change";
    changeButton.addEventListener("click", () => {
        nameInput.value = name;
        typeInput.value = type;
        playersInput.value = players;

        editButton.removeAttribute("disabled");
        addButton.setAttribute("disabled", "disabled");
        formElement.setAttribute("data-game-id", gameId);

    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", async () => {
        await fetch(`${baseUrl}/${gameId}`, {
            method: "DELETE",
        });
        await loadGames();
    });

    const divButtons = document.createElement("div");
    divButtons.className = "buttons-container";
    divButtons.appendChild(changeButton);
    divButtons.appendChild(deleteButton);

    const gameDivElement = document.createElement("div");
    gameDivElement.className = "board-game";
    gameDivElement.appendChild(divContentElement);
    gameDivElement.appendChild(divButtons);

    return gameDivElement;
}

function clearInputs() {
    nameInput.value = "";
    typeInput.value = "";
    playersInput.value = "";
}
