function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/phonebook";
    const phoneBookElement = document.getElementById("phonebook");
    const loadBtnElement = document.getElementById("btnLoad");
    const createBtnElement = document.getElementById("btnCreate");
    const personInputElement = document.getElementById("person");
    const phoneInputElement = document.getElementById("phone");

    loadBtnElement.addEventListener("click", loadContact);

    createBtnElement.addEventListener("click", () => {
        createContact(personInputElement.value, phoneInputElement.value);
        personInputElement.value = ""
        phoneInputElement.value = ""
    });

    async function createContact(person, phone) {
        fetch(baseUrl, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                person,
                phone
            })
        })
        await loadContact()
    }

    async function loadContact (event) {
        phoneBookElement.textContent = ""

        let response = await fetch(baseUrl);
        let data = await response.json();

        Object.values(data).forEach(obj => {
            let liElement = document.createElement("li");
            let phoneData = `${obj.person}: ${obj.phone}`;
            liElement.textContent = phoneData;

            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                deleteContact(obj._id, liElement)
            })

            liElement.appendChild(deleteButton);
            phoneBookElement.appendChild(liElement);
        });
    }

    async function deleteContact(id, liElement) {
        await fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
        })
        liElement.remove();
    }
}

attachEvents();
