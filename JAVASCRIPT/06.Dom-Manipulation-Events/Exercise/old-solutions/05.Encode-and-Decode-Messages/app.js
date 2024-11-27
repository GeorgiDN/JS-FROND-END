function encodeAndDecodeMessages() {
    let [encodeArea, decodeArea] = Array.from(document.querySelectorAll("textarea"));
    const [encodeButton, decodeButton] = Array.from(document.querySelectorAll("button"));

    encodeButton.addEventListener("click", () => {
        let currentMessage = encodeArea.value;
        let encodedMessage = "";
        for (let char of currentMessage) {
            encodedMessage += String.fromCharCode(char.charCodeAt(0) + 1);
        }
        decodeArea.value = encodedMessage;
        encodeArea.value = "";
    });

    decodeButton.addEventListener("click", () => {
        let currentMessage = decodeArea.value;
        let decodedMessage = "";
        for (let char of currentMessage) {
            decodedMessage += String.fromCharCode(char.charCodeAt(0) - 1);
        }
        decodeArea.value = decodedMessage;
    });
}








// //  0/100
// function encodeAndDecodeMessages() {
//     const divs = document.querySelectorAll("main > div");
//
//     const encodeBox = divs[0];
//     const decodeBox = divs[1];
//
//     const messageArea = encodeBox.querySelector("textarea");
//     const encodeButton = encodeBox.querySelector("button");
//
//     const lastMessageArea = decodeBox.querySelector("textarea");
//     const decodeButton = decodeBox.querySelector("button");
//
//     encodeButton.addEventListener("click", () => {
//         let currentMessage = messageArea.value;
//         let encodedMessage = "";
//         for (let char of currentMessage) {
//             encodedMessage += String.fromCharCode(char.charCodeAt(0) + 1);
//         }
//         lastMessageArea.value = encodedMessage;
//         messageArea.value = "";
//     });
//
//     decodeButton.addEventListener("click", () => {
//         let currentMessage = lastMessageArea.value;
//         let decodedMessage = "";
//         for (let char of currentMessage) {
//             decodedMessage += String.fromCharCode(char.charCodeAt(0) - 1);
//         }
//         lastMessageArea.value = decodedMessage;
//     });
// }
