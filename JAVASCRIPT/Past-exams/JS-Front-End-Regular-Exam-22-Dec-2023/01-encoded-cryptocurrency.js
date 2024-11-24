function solve(inputArray) {
    let encodedMessage = inputArray.shift();

    while (true) {
        let command = inputArray.shift();

        if (command === "Buy") {
            break;
        }

        if (command === "TakeEven") {
            encodedMessage = encodedMessage.split("")
                .filter((char, index) => index % 2 === 0).join("");
            console.log(encodedMessage);

        } else if (command.startsWith("ChangeAll")) {
            let stingReplacement = command.split("?");
            let substring = stingReplacement[1];
            let replacement = stingReplacement[2];
            while (encodedMessage.includes(substring)) {
                encodedMessage = encodedMessage.replace(substring, replacement);
            }
            console.log(encodedMessage);

        } else if (command.startsWith("Reverse")) {
            let substring = command.split("?")[1];
            if (encodedMessage.includes(substring)) {
                let reversedSubstring = substring.split("").reverse().join("");
                encodedMessage = encodedMessage.replace(substring, "");
                encodedMessage += reversedSubstring;
                console.log(encodedMessage);
            } else {
                console.log("error");
            }
        }
    }
    console.log(`The cryptocurrency is: ${encodedMessage}`);
}


// solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
// "TakeEven",
// "Reverse?!nzahc",
// "ChangeAll?m?g",
// "Reverse?adshk",
// "ChangeAll?z?i",
// "Buy"])


// solve(["PZDfA2PkAsakhnefZ7aZ",
// "TakeEven",
// "TakeEven",
// "TakeEven",
// "ChangeAll?Z?X",
// "ChangeAll?A?R",
// "Reverse?PRX",
// "Buy"])
