const baseUrl = "http://localhost:3030/jsonstore/matches";

const loadButton = document.getElementById("load-matches");
const addButton = document.getElementById("add-match");
const editButton = document.getElementById("edit-match");
const matchList = document.getElementById("list");
const formElement = document.querySelector("#form form");

const teamHostInput = document.getElementById("host");
const scoreInput = document.getElementById("score");
const teamGuestsInput = document.getElementById("guest");

loadButton.addEventListener("click", loadMatches);
addButton.addEventListener("click", addMatch);
editButton.addEventListener("click", editMatch);

async function addMatch () {
    const host = teamHostInput.value;
    const score = scoreInput.value;
    const guest = teamGuestsInput.value;

    clearInputs();

    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({host, score, guest}),
    });

    await loadMatches();
}

async function editMatch() {
    const matchId = formElement.getAttribute("data-match-id");

    const host = teamHostInput.value;
    const score = scoreInput.value;
    const guests = teamGuestsInput.value;

    clearInputs();

    await fetch(`${baseUrl}/${matchId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({host, score, guests, _id: matchId}),
    });
    await loadMatches();

    editButton.setAttribute("disabled", "disabled");
    addButton.removeAttribute("disabled");
    formElement.removeAttribute("data-match-id");
}


async function loadMatches () {
    matchList.innerHTML = "";

    const response = await fetch(baseUrl);
    const result = await response.json();
    const matches = Object.values(result);

    const matchesElements = matches.map(match => createMatchElement(match.host, match.score, match.guest, match._id));

    matchList.append(...matchesElements);

}

function createMatchElement (host, score, guest, matchId) {
    const pHostElement = document.createElement("p");
    pHostElement.textContent = host;

    const pScoreElement = document.createElement("p");
    pScoreElement.textContent = score;

    const pTeamGuestsElement = document.createElement("p");
    pTeamGuestsElement.textContent = guest;

    const divContent = document.createElement("div");
    divContent.classList.add("info");

    const liElement = document.createElement("li");
    liElement.classList.add("match");
    divContent.appendChild(pHostElement);
    divContent.appendChild(pScoreElement);
    divContent.appendChild(pTeamGuestsElement);

    liElement.appendChild(divContent);

    const divButtons = document.createElement("div");
    divButtons.classList.add("btn-wrapper");

    const changeButton = document.createElement("button");
    changeButton.className = "change-btn";
    changeButton.textContent = "Change";
    changeButton.addEventListener("click", () => {
        teamHostInput.value = host;
        scoreInput.value = score;
        teamGuestsInput.value = guest;

        editButton.removeAttribute("disabled");
        addButton.setAttribute("disabled", "disabled");
        formElement.setAttribute("data-match-id", matchId);
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", async () => {
        await fetch(`${baseUrl}/${matchId}`, {
            method: "DELETE",
        });
        await loadMatches();
    });


    divButtons.appendChild(changeButton);
    divButtons.appendChild(deleteButton);

    liElement.appendChild(divButtons);

    return liElement;
}

function clearInputs() {
    teamHostInput.value = "";
    scoreInput.value = "";
    teamGuestsInput.value = "";
}
