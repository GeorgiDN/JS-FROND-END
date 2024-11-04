function attachEvents() {
    const textAreaElement = document.getElementById("messages");
    const nameInputElement = document.querySelector("#main #controls div:first-of-type input");
    const messageInputElement = document.querySelector("#main #controls div:last-of-type input");
    const baseUrl = "http://localhost:3030/jsonstore/messenger";
    const submitBtnElement = document.getElementById("submit");
    const refreshBtnElement = document.getElementById("refresh");

    let messageData = {};

    submitBtnElement.addEventListener("click", () => {
        messageData = sendMessage(nameInputElement.value, messageInputElement.value)
        fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(messageData)
        });
    });

    refreshBtnElement.addEventListener("click", refreshEvent)

   function sendMessage(author, content) {
        return { author, content };
    }

    async function refreshEvent (event) {
        textAreaElement.textContent = "";

        let messageResponse = await fetch(baseUrl);
        let messages = await messageResponse.json();

        let resultArray = [];

        Object.values(messages)
            .forEach(m => {
                let author = m.author;
                let content = m.content;
                resultArray.push(`${author}: ${content}`);
            })
        textAreaElement.textContent = resultArray.join("\n");
    }
}

attachEvents();
