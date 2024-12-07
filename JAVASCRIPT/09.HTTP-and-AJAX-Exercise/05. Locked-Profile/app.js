function lockedProfile() {
    const baseUrl = "http://localhost:3030/jsonstore/advanced/profiles";
    const mainElement = takeElementByTag("#main");
    let counter = 1;

    async function loadProfiles() {
        const response = await fetch(baseUrl);
        const result = await response.json();
        const profiles = Object.values(result);

        mainElement.innerHTML = "";

        const recordsElements = profiles.map(profile =>
            createRecord(profile.username, profile.email, profile.age, profile._id));

        mainElement.append(...recordsElements);
    }

    function createRecord(username, email, age, profileId) {
        let currentCounter = counter++;

        const divProfile = createEl("div");
        divProfile.classList.add("profile");

        const imgElement = createEl("img");
        imgElement.setAttribute("src", "./iconProfile2.png");
        imgElement.classList.add("userIcon");

        const lockLabelElement = createEl("label");
        lockLabelElement.textContent = "Lock";

        const InputRadioLockElement = createEl("input");
        InputRadioLockElement.type = "radio";
        InputRadioLockElement.name = `user${currentCounter}Locked`;
        InputRadioLockElement.value = "lock";
        InputRadioLockElement.checked = true;

        const unLockLabelElement = createEl("label");
        unLockLabelElement.textContent = "Unlock";

        const InputRadioUnLockElement = createEl("input");
        InputRadioUnLockElement.type = "radio";
        InputRadioUnLockElement.name = `user${currentCounter}Locked`;
        InputRadioUnLockElement.value = "unlock";
        InputRadioUnLockElement.checked = false;

        const brElement = createEl("br");

        const hrProfileElement = createEl("hr");

        const usernameLabelElement = createEl("label");

        const inputTextElement = createEl("input");
        inputTextElement.type = "text";
        inputTextElement.name = `user${currentCounter}Username`;
        inputTextElement.value = username;
        inputTextElement.disabled = true;
        inputTextElement.readOnly = true;

        // Hidden
        const divHiddenFields = createEl("div");
        divHiddenFields.id = `user${currentCounter}HiddenFields`;
        divHiddenFields.style.display = "none";

        const hrHiddenElement = createEl("hr");

        const emailLabelElement = createEl("label");
        emailLabelElement.textContent = "Email:";

        const inputEmailElement = createEl("input");
        inputEmailElement.type = "email";
        inputEmailElement.name = `user${currentCounter}Email`;
        inputEmailElement.value = email;
        inputEmailElement.disabled = true;
        inputEmailElement.readOnly = true;

        const labelAgeElement = createEl("label");
        labelAgeElement.textContent = "Age:"

        const inputAgeElement = createEl("input");
        inputAgeElement.type = "number";
        inputAgeElement.name = `user${currentCounter}Age`;
        inputAgeElement.value = age;
        inputAgeElement.disabled = true;
        inputAgeElement.readOnly = true;

        const buttonShowMoreElement = createEl("button");
        buttonShowMoreElement.textContent = "Show more";
        buttonShowMoreElement.addEventListener("click", () => {
            showMore(divHiddenFields, InputRadioLockElement, buttonShowMoreElement);
        })

        // Append hidden fields
        divHiddenFields.appendChild(hrHiddenElement);
        divHiddenFields.appendChild(emailLabelElement);
        divHiddenFields.appendChild(inputEmailElement);
        divHiddenFields.appendChild(labelAgeElement);
        divHiddenFields.appendChild(inputAgeElement);

        divProfile.appendChild(imgElement);
        divProfile.appendChild(lockLabelElement);
        divProfile.appendChild(InputRadioLockElement);
        divProfile.appendChild(unLockLabelElement);
        divProfile.appendChild(InputRadioUnLockElement);
        divProfile.appendChild(brElement);
        divProfile.appendChild(hrProfileElement);
        divProfile.appendChild(usernameLabelElement);
        divProfile.appendChild(inputTextElement);
        divProfile.appendChild(divHiddenFields);
        divProfile.appendChild(buttonShowMoreElement);

        return divProfile;
    }

    function showMore(divHiddenFields, InputRadioLockElement, buttonShowMoreElement) {
        if (InputRadioLockElement.checked === false) {
            if (divHiddenFields.style.display === "none") {
                divHiddenFields.style.display = "block";
                buttonShowMoreElement.textContent = "Hide it";
            } else {
                divHiddenFields.style.display = "none";
                buttonShowMoreElement.textContent = "Show more";
            }
        }
    }

    function takeElementByTag(tag) {
        return document.querySelector(tag);
    }

    function createEl(tag) {
        return document.createElement(tag);
    }

    function clearInputs(...fields) {
        for (let field of fields) {
            field.value = "";
        }
    }

    loadProfiles();
}
