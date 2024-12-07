function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/collections/students";
    const firstNameInput = takeElementByTag(".container-form .inputs input[name='firstName']");
    const lastNameInput = takeElementByTag(".container-form .inputs input[name='lastName']");
    const facultyNumberInput = takeElementByTag(".container-form .inputs input[name='facultyNumber']");
    const gradeInput = takeElementByTag(".container-form .inputs input[name='grade']");
    const tBodyElement = takeElementByTag("#results tbody");
    const submitButton = takeElementByTag("#submit");

    submitButton.addEventListener("click", saveRecord);

    async function loadRecords() {
        try {
            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status} - ${response.statusText}`);
            }

            const result = await response.json();
            const students = Object.values(result);

            tBodyElement.innerHTML = "";

            const recordsElements = students.map(student =>
                createRecord(student.firstName, student.lastName, student.facultyNumber, student.grade)
            );

            tBodyElement.append(...recordsElements);
        } catch (error) {
            console.error("Error loading records", error);
        }
    }

    function createRecord(firstName, lastName, facultyNumber, grade) {
        const tdFirstNameElement = createEl("td");
        tdFirstNameElement.textContent = firstName;

        const tdLastNameElement = createEl("td");
        tdLastNameElement.textContent = lastName;

        const tdLFacultyNumberElement = createEl("td");
        tdLFacultyNumberElement.textContent = facultyNumber;

        const tdGradeElement = createEl("td");
        tdGradeElement.textContent = grade;

        const trElement = createEl("tr");
        trElement.appendChild(tdFirstNameElement);
        trElement.appendChild(tdLastNameElement);
        trElement.appendChild(tdLFacultyNumberElement);
        trElement.appendChild(tdGradeElement);

        return trElement;
    }

    async function saveRecord() {

        if (!firstNameInput.value || !lastNameInput.value || !facultyNumberInput.value || !gradeInput.value) {
            return;
        }

        try {
            const firstName = firstNameInput.value;
            const lastName = lastNameInput.value;
            const facultyNumber = facultyNumberInput.value;
            const grade = gradeInput.value;

            await fetch(baseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({firstName, lastName, facultyNumber, grade})
            });

            clearInputs();
            await loadRecords();

        } catch (error) {
            console.log("Error to during save the records", error);
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

    loadRecords();
}

attachEvents();
