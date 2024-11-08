window.addEventListener("load", solve);

function solve() {
    const expenseTypeInput = document.getElementById("expense");
    const amountInput = document.getElementById("amount");
    const dateInput = document.getElementById("date");
    const addButton = document.getElementById("add-btn");
    const previewList = document.getElementById("preview-list");
    const expensesList = document.getElementById("expenses-list");
    // const deleteButton = document.querySelector("#expenses button");
    const deleteButton = document.querySelector(".btn.delete");

    addButton.addEventListener("click", createPreviewList);
    deleteButton.addEventListener("click", () => deleteInformation());

    function createPreviewList () {
        if (!expenseTypeInput.value || !amountInput.value || !dateInput.value) {
            return;
        }

        const expenseType = expenseTypeInput.value;
        const amount = amountInput.value;
        const date = dateInput.value;

        const liElement = createEl("li");
        const articleElement = createEl("article");

        const pExpenseTypeElement = createEl("p");
        pExpenseTypeElement.textContent = `Type: ${expenseType}`;

        const pAmountElement = createEl("p");
        pAmountElement.textContent = `Amount: ${amount}$`;

        const pDateElement = createEl("p");
        pDateElement.textContent = `Date: ${date}`;

        const divButtons = createEl("div");
        divButtons.className = "buttons";

        const editButtonEl = createEl("button");
        editButtonEl.classList.add("btn", "edit");
        editButtonEl.textContent = "edit";
        editButtonEl.addEventListener("click", () => editInformation(liElement, expenseType, amount, date));

        const okButtonEl = createEl("button");
        okButtonEl.classList.add("btn", "ok");
        okButtonEl.textContent = "ok";
        okButtonEl.addEventListener("click", () => saveInformation(liElement));

        articleElement.appendChild(pExpenseTypeElement);
        articleElement.appendChild(pAmountElement);
        articleElement.appendChild(pDateElement);

        divButtons.appendChild(editButtonEl);
        divButtons.appendChild(okButtonEl);

        liElement.appendChild(articleElement);
        liElement.appendChild(divButtons);
        liElement.classList.add("expense-item");

        previewList.appendChild(liElement);

        expenseTypeInput.value = "";
        amountInput.value = "";
        dateInput.value = "";

        addButton.setAttribute("disabled", "disabled");
    }

    function editInformation(liElement, expenseType, amount, date) {
        expenseTypeInput.value = expenseType;
        amountInput.value = amount;
        dateInput.value = date;

        liElement.remove();
        addButton.removeAttribute("disabled");
    }

    function saveInformation(liElement) {
        const buttonsDiv = liElement.querySelector(".buttons");
        buttonsDiv.remove();

        expensesList.appendChild(liElement);
        addButton.removeAttribute("disabled");
    }

    function deleteInformation() {
        location.reload();
        // expensesList.innerHTML = "";
    }

    function createEl(tagName) {
        return document.createElement(tagName);
    }
}

