function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/phonebook";
    const personInput = takeElementByTag("#person");
    const phoneInput = takeElementByTag("#phone");
    const phoneBookList = takeElementByTag("#phonebook");
    const loadButton = takeElementByTag("#btnLoad");
    const createButton = takeElementByTag("#btnCreate");

    loadButton.addEventListener("click", loadPhoneNumbers);
    createButton.addEventListener("click", createContact);

    async function createContact() {
        const person = personInput.value;
        const phone = phoneInput.value;

        await fetch(baseUrl, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({person, phone})
        });

        clearInputs(personInput, phoneInput);

        await loadPhoneNumbers();
    }

    async function loadPhoneNumbers(){
        phoneBookList.innerHTML = "";

        const response = await fetch(baseUrl);
        const result = await response.json();
        Object.values(result).forEach(record => {
            const liElement = createEl("li");
            liElement.textContent = `${record.person}: ${record.phone}`;
            const deleteButton = createEl("button");
            deleteButton.textContent = "Delete";

            deleteButton.addEventListener("click", () => {
                deleteContact(record._id, liElement)
            });

            liElement.appendChild(deleteButton);
            phoneBookList.appendChild(liElement);
        });
    }

    async function deleteContact(recordId, liElement) {
        await fetch(`${baseUrl}/${recordId}`,{
            method: "DELETE",
            })
        liElement.remove();
    }

    function takeElementByTag(tag) {
        return document.querySelector(tag);
    }

    function createEl(tag) {
        return document.createElement(tag);
    }

    function clearInputs(field1, field2) {
        field1.value = "";
        field2.value = "";
    }
}

attachEvents();
