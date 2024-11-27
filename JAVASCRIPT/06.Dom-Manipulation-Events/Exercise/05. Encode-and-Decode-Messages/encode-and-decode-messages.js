document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const messageForEncode = document.querySelector("#encode textarea");
    const encodeButton = document.querySelector("#encode button");
    const lastReceivedMessage = document.querySelector("#decode textarea")
    const decodeButton = document.querySelector("#decode button");

    encodeButton.addEventListener("click", (e) => {
        e.preventDefault();
        encodeMessage();
    });

    decodeButton.addEventListener("click", (e) => {
        e.preventDefault();
        decodeMessage();
    });

    function encodeMessage() {
        if (!messageForEncode.value) {
            return;
        }
        let encodedMessage = messageForEncode.value
            .split("")
            .map(ch => String.fromCharCode(ch.charCodeAt(0) + 1))
            .join("");

        messageForEncode.value = "";
        lastReceivedMessage.value = encodedMessage;
    }

    function decodeMessage() {
        if (!lastReceivedMessage.value) {
            return;
        }
        let decodedMessageText = lastReceivedMessage.value
            .split("")
            .map(ch => String.fromCharCode(ch.charCodeAt(0) - 1))
            .join("");

        lastReceivedMessage.value = decodedMessageText;
    }
}



// document.addEventListener('DOMContentLoaded', solve);
//
// function solve() {
//     const messageForEncode = document.querySelector("#encode textarea");
//     const encodeButton = document.querySelector("#encode button");
//     const lastReceivedMessage = document.querySelector("#decode textarea");
//     const decodeButton = document.querySelector("#decode button");
//
//     encodeButton.addEventListener("click", (e) => {
//         e.preventDefault();
//         transformMessage("encode");
//     });
//
//     decodeButton.addEventListener("click", (e) => {
//         e.preventDefault();
//         transformMessage("decode");
//     });
//
//     function transformMessage(action) {
//         const sourceText = action === "encode" ? messageForEncode.value : lastReceivedMessage.value;
//         if (!sourceText) {
//             return;
//         }
//
//         const transformedMessage = sourceText
//             .split("")
//             .map(ch =>
//                 action === "encode"
//                 ? String.fromCharCode(ch.charCodeAt(0) + 1)
//                 : String.fromCharCode(ch.charCodeAt(0) - 1)
//             )
//             .join("");
//
//         if (action === "encode") {
//             messageForEncode.value = "";
//             lastReceivedMessage.value = transformedMessage;
//         } else {
//             lastReceivedMessage.value = transformedMessage;
//         }
//     }
// }




// function solve() {
//     const message = document.querySelector("#encode textarea");
//     const encodeButton = document.querySelector("#encode button");
//     const lastReceivedMessage = document.querySelector("#decode textarea")
//     const decodeButton = document.querySelector("#decode button");
//
//     encodeButton.addEventListener("click", (e) => {
//         e.preventDefault();
//         if (!message.value) {
//             return;
//         }
//         let encodedMessage = message.value
//             .split("")
//             .map(ch => String.fromCharCode(ch.charCodeAt(0) + 1))
//             .join("");
//
//         message.value = "";
//         lastReceivedMessage.value = encodedMessage;
//     });
//
//     decodeButton.addEventListener("click", (e) => {
//         e.preventDefault();
//         if (!lastReceivedMessage.value) {
//             return;
//         }
//         let decodedMessage =  lastReceivedMessage.value
//             .split("")
//             .map(ch => String.fromCharCode(ch.charCodeAt(0) - 1))
//             .join("");
//
//         lastReceivedMessage.value = decodedMessage;
//     });
// }



// function solve() {
//     const message = document.querySelector("#encode textarea");
//     const encodeButton = document.querySelector("#encode button");
//     const lastReceivedMessage = document.querySelector("#decode textarea")
//     const decodeButton = document.querySelector("#decode button");
//     let encodedMessage = "";
//     let decodedMessage = "";
//     encodeButton.addEventListener("click", (e) => {
//         e.preventDefault();
//         if (!message.value) {
//             return;
//         }
//         message.value.split("").forEach((ch) => {
//             encodedMessage += String.fromCharCode(ch.charCodeAt(0) + 1);
//         });
//         message.value = "";
//         lastReceivedMessage.value = encodedMessage;
//         encodedMessage = "";
//     });
//
//     decodeButton.addEventListener("click", (e) => {
//         e.preventDefault();
//         if (!lastReceivedMessage.value) {
//             return;
//         }
//         lastReceivedMessage.value.split("").forEach((ch) => {
//             decodedMessage += String.fromCharCode(ch.charCodeAt(0) - 1);
//         });
//     lastReceivedMessage.value = "";
//     lastReceivedMessage.value = decodedMessage;
//     decodedMessage = "";
//     });
// }

