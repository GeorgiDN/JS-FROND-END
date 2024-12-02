function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/messenger";
    const textAreaEl = takeElementByTag("#messages");
    const nameInput = takeElementByTag("#controls input[name='author']")
    const messageInput = takeElementByTag("#controls input[name='content']")
    const sendButton = takeElementByTag("#submit");
    const refreshButton = takeElementByTag("#refresh");

    refreshButton.addEventListener("click", loadMessages);
    sendButton.addEventListener("click", addMessage);

    async function addMessage() {

        const author = nameInput.value;
        const content = messageInput.value;

        await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({author, content})
        });

        clearInputs(nameInput, messageInput);
    }

    async function loadMessages() {
        textAreaEl.textContent = "";

        const messageResponse = await fetch(baseUrl);
        const messagesData = await messageResponse.json();
        const messages = Object.values(messagesData)
            .map(message => `${message.author}: ${message.content}`)
            .join("\n");
        textAreaEl.textContent = messages;
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
