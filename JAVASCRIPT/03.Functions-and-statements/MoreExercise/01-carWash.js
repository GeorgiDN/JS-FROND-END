function carWash(commandsArray) {
    let percentClean = 0;
    let commands = {
        "water": 1.2,
        "vacuum cleaner": 1.25,
        "mud": 0.9
    }

    for (let currenCommand of commandsArray) {
        if (currenCommand === "soap") {
            percentClean += 10;
        } else {
            percentClean *= commands[currenCommand];
        }
    }
    return `The car is ${percentClean.toFixed(2)}% clean.`
}

console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']))
