function solve(inputArray) {
    const numberBaristas = Number(inputArray.shift());
    let workersData = {};

    workersData = takeInputData();

    while (true) {
        let command = inputArray.shift();
        if (command === "Closed") {
            break;
        }

        let data = command.split(" / ");
        let currentCommand = data[0];
        let name = data[1];

        if (currentCommand === "Prepare") {
            let shift = data[2];
            let coffeType = data[3];

            prepareCoffe(name, shift, coffeType);

        } else if (currentCommand === "Change Shift") {
            let newShift = data[2];

            workersData =  updateShift(workersData, name, newShift);

        } else if (currentCommand === "Learn") {
            let newCoffeType = data[2];

            workersData = learn(workersData, name, newCoffeType);
        }
    }

    Object.entries(workersData).forEach(([name, data]) => {
        let result = [`Barista: ${name}`];
        result.push(`Shift: ${data["shift"]}`);
        result.push(`Drinks: ${data["coffeTypes"].join(", ")}`);
        console.log(result.join(", "))
    })

    function takeInputData() {
        for (let i = 0; i < numberBaristas; i++) {
            let [name, shift, coffeTypes] = inputArray.shift().split(" ");
            coffeTypes = coffeTypes.split(",");
            workersData[name] = {"shift": shift, "coffeTypes": coffeTypes};
        }
        return workersData;
    }

    function prepareCoffe(name, shift, coffeType) {
        if (workersData[name]["shift"] === shift && workersData[name]["coffeTypes"].includes(coffeType)) {
            return console.log(`${name} has prepared a ${coffeType} for you!`);
        }
        return console.log(`${name} is not available to prepare a ${coffeType}.`);
    }

    function updateShift(workersData, name, newShift) {
        workersData[name]["shift"] = newShift;
        console.log(`${name} has updated his shift to: ${newShift}`)
        return workersData;
    }

    function learn(workersData, name, newCoffeType) {
        if (workersData[name]["coffeTypes"].includes(newCoffeType)) {
            console.log(`${name} knows how to make ${newCoffeType}.`);
        } else {
            workersData[name]["coffeTypes"].push(newCoffeType);
            console.log(`${name} has learned a new coffee type: ${newCoffeType}.`);
        }
        return workersData;
    }
}


solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']
)

solve(['4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / day',
    'Learn / Carol / Latte',
    'Prepare / Bob / night / Latte',
    'Learn / David / Cappuccino',
    'Prepare / Carol / day / Cappuccino',
    'Change Shift / Alice / night',
    'Learn / Bob / Mocha',
    'Prepare / David / night / Espresso',
    'Closed']
)
