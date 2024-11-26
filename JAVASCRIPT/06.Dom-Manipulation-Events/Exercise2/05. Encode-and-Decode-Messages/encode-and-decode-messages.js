document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const message = document.querySelector("#encode textarea");
    const encodeButton = document.querySelector("#encode button");
    const lastReceivedMessage = document.querySelector("#decode textarea")
    const decodeButton = document.querySelector("#decode button");
    let encodedMessage = "";
    let decodedMessage = "";
    encodeButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (!message.value) {
            return;
        }
        message.value.split("").forEach((ch) => {
            encodedMessage += String.fromCharCode(ch.charCodeAt(0) + 1);
        });
        message.value = "";
        lastReceivedMessage.value = encodedMessage;
        encodedMessage = "";
    });

    decodeButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (!lastReceivedMessage.value) {
            return;
        }
        lastReceivedMessage.value.split("").forEach((ch) => {
            decodedMessage += String.fromCharCode(ch.charCodeAt(0) - 1);
        });
    lastReceivedMessage.value = "";
    lastReceivedMessage.value = decodedMessage;
    decodedMessage = "";
    });
}

