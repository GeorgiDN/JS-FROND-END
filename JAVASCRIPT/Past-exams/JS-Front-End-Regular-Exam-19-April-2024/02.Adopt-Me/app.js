window.addEventListener("load", solve);

function solve() {
    const animalTypeInput = document.getElementById("type");
    const ageInput = document.getElementById("age");
    const genderInput = document.getElementById("gender");
    const adoptButton = document.getElementById("adopt-btn");
    const previewList = document.getElementById("adoption-info");
    const adoptedList = document.getElementById("adopted-list");

    adoptButton.addEventListener("click", createPreviewList);

    function createPreviewList(e) {
        if (!animalTypeInput.value || !ageInput.value || !genderInput.value) {
            return;
        }
        e.preventDefault();

        const animalType = animalTypeInput.value;
        const age = ageInput.value;
        const gender = genderInput.value;

        const liElement = createEl("li");
        const articleElement = createEl("article");

        const pAnimalTypeElement = createEl("p");
        pAnimalTypeElement.textContent = `Pet:${animalType}`;

        const pAgeElement = createEl("p");
        pAgeElement.textContent = `Age:${age}`;

        const pGenderElement = createEl("p");
        pGenderElement.textContent = `Gender:${gender}`;

        const divButtons = createEl("div");
        divButtons.className = "buttons";

        const editButtonEl = createEl("button");
        editButtonEl.classList.add("edit-btn");
        editButtonEl.textContent = "Edit";
        editButtonEl.addEventListener("click", () => editInformation(liElement, animalType, age, gender));

        const doneButtonEl = createEl("button");
        doneButtonEl.classList.add("done-btn");
        doneButtonEl.textContent = "Done";
        doneButtonEl.addEventListener("click", () => saveInformation(liElement));

        articleElement.appendChild(pAnimalTypeElement);
        articleElement.appendChild(pGenderElement);
        articleElement.appendChild(pAgeElement);

        divButtons.appendChild(editButtonEl);
        divButtons.appendChild(doneButtonEl);

        liElement.appendChild(articleElement);
        liElement.appendChild(divButtons);

        previewList.appendChild(liElement);

        clearInputs(animalTypeInput, ageInput, genderInput);
    }

    function editInformation(liElement, animalType, age, gender) {
        animalTypeInput.value = animalType;
        ageInput.value = age;
        genderInput.value = gender;

        liElement.remove();
    }

    function saveInformation(liElement) {
        const buttonsDiv = liElement.querySelector(".buttons");
        buttonsDiv.remove();

        const clearButtonEl = createEl("button");
        clearButtonEl.classList.add("clear-btn");
        clearButtonEl.textContent = "Clear";
        clearButtonEl.addEventListener("click", () => deleteInformation(liElement));

        liElement.appendChild(clearButtonEl);

        adoptedList.appendChild(liElement);
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



