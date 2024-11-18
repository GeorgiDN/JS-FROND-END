function solve(inputArray) {
    let spell = inputArray.shift();

    while (true) {
        let command = inputArray.shift();

        if (command === "End") {
            break;
        }

        if (command === "RemoveEven") {
            spell = spell.split("").filter((char, index) => index % 2 === 0).join("");
            console.log(spell);

        } else if (command.startsWith("TakePart")) {
            let data = command.split("!");
            let startIndex = Number(data[1]);
            let endIndex = Number(data[2]);
            spell = spell.slice(startIndex, endIndex);
            console.log(spell);

        } else if (command.startsWith("Reverse")) {
            let substring = command.split("!")[1];
            if (spell.includes(substring)) {
                let reversedSubstring = substring.split("").reverse().join("");
                spell = spell.replace(substring, "");
                spell += reversedSubstring;
                console.log(spell);
            } else {
                console.log("Error");
            }
        }
    }

    console.log(`The concealed spell is: ${spell}`)
}


// solve((["asAsl2adkda2mdaczsa",
// "RemoveEven",
// "TakePart!1!9",
// "Reverse!maz",
// "End"])
// )
