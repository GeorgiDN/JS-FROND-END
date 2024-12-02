window.addEventListener("load", solve);

function solve() {
    const playerInput = document.getElementById("player");
    const scoreInput = document.getElementById("score");
    const roundInput = document.getElementById("round");
    const addButton = document.getElementById("add-btn");
    const sureList = document.getElementById("sure-list");
    const scoreboardList = document.getElementById("scoreboard-list");

    addButton.addEventListener("click", createPersonInfoList);

    function createPersonInfoList() {
        if (!playerInput.value || !scoreInput.value || !roundInput.value) {
            return;
        }

        const player = playerInput.value;
        const score = scoreInput.value;
        const round = roundInput.value;

        const liElement = createEl("li");
        liElement.classList.add("dart-item");

        const articleElement = createEl("article");

        const pPlayerElement = createEl("p");
        pPlayerElement.textContent = player;

        const pScoreElement = createEl("p");
        pScoreElement.textContent = `Score: ${score}`;

        const pRoundElement = createEl("p");
        pRoundElement.textContent = `Round: ${round}`;

        const editButtonEl = createEl("button");
        editButtonEl.classList.add("btn");
        editButtonEl.classList.add("edit");
        editButtonEl.textContent = "edit";
        editButtonEl.addEventListener("click", () => editInformation(liElement, player, round, score));

        const okButtonEl = createEl("button");
        okButtonEl.classList.add("btn");
        okButtonEl.classList.add("ok");
        okButtonEl.textContent = "ok";
        okButtonEl.addEventListener("click", () => saveInformation(liElement));

        articleElement.appendChild(pPlayerElement);
        articleElement.appendChild(pScoreElement);
        articleElement.appendChild(pRoundElement);

        liElement.appendChild(articleElement);
        liElement.appendChild(editButtonEl);
        liElement.appendChild(okButtonEl);

        sureList.appendChild(liElement);

        clearInputs(playerInput, scoreInput, roundInput);
        addButton.setAttribute("disabled", "disabled");

    }

    function editInformation(liElement, player, round, score) {
        playerInput.value = player;
        scoreInput.value = score;
        roundInput.value = round;

        liElement.remove();
        addButton.removeAttribute("disabled");
    }

    function saveInformation(liElement) {
        const addBtn = liElement.querySelector(".ok");
        const editBtn = liElement.querySelector(".edit");

        addBtn.remove();
        editBtn.remove();

        const deleteButtonEl = document.querySelector(".clear");
        deleteButtonEl.addEventListener("click", () => deleteInformation(liElement));

        scoreboardList.appendChild(liElement);
        addButton.removeAttribute("disabled");
    }

    function deleteInformation(liElement) {
        liElement.remove();
    }

    function createEl(tagName) {
        return document.createElement(tagName);
    }

    function clearInputs(field1, field2, field3) {
        field1.value = "";
        field2.value = "";
        field3.value = "";
    }
}
