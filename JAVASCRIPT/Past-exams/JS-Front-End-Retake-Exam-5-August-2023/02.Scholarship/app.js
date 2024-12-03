window.addEventListener("load", solve);

function solve() {
    const studentInput = document.getElementById("student");
    const universityInput = document.getElementById("university");
    const scoreInput = document.getElementById("score");
    const nextButton = document.getElementById("next-btn");
    const previewList = document.getElementById("preview-list");
    const candidatesList = document.getElementById("candidates-list");

    nextButton.addEventListener("click", createPersonInfoList);

    function createPersonInfoList() {
        if (!studentInput.value || !universityInput.value || !scoreInput.value) {
            return;
        }

        const student = studentInput.value;
        const university = universityInput.value;
        const score = scoreInput.value;

        const liElement = createEl("li");
        liElement.classList.add("application");

        const articleElement = createEl("article");

        const h4StudentElement = createEl("h4");
        h4StudentElement.textContent = student;

        const pUniversityElement = createEl("p");
        pUniversityElement.textContent = `University: ${university}`;

        const pScoreElement = createEl("p");
        pScoreElement.textContent = `Score: ${score}`;

        const editButtonEl = createEl("button");
        editButtonEl.classList.add("action-btn");
        editButtonEl.classList.add("edit");
        editButtonEl.textContent = "edit";
        editButtonEl.addEventListener("click", () => editInformation(liElement, student, score, university));

        const applyButtonEl = createEl("button");
        applyButtonEl.classList.add("action-btn");
        applyButtonEl.classList.add("apply");
        applyButtonEl.textContent = "apply";
        applyButtonEl.addEventListener("click", () => saveInformation(liElement));

        articleElement.appendChild(h4StudentElement);
        articleElement.appendChild(pUniversityElement);
        articleElement.appendChild(pScoreElement);

        liElement.appendChild(articleElement);
        liElement.appendChild(editButtonEl);
        liElement.appendChild(applyButtonEl);

        previewList.appendChild(liElement);

        clearInputs(studentInput, universityInput, scoreInput);
        nextButton.setAttribute("disabled", "disabled");
    }

    function editInformation(liElement, student, score, university) {
        studentInput.value = student;
        universityInput.value = university;
        scoreInput.value = score;

        liElement.remove();
        nextButton.removeAttribute("disabled");
    }

    function saveInformation(liElement) {
        const applyBtn = liElement.querySelector(".apply");
        const editBtn = liElement.querySelector(".edit");

        applyBtn.remove();
        editBtn.remove();

        candidatesList.appendChild(liElement);
        nextButton.removeAttribute("disabled");
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
