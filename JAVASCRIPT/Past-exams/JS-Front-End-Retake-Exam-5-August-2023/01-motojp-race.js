function solve(inputArray) {
    const numberRiders = Number(inputArray.shift())
    let ridersData = {};
    const maxFuelCapacity = 200;
    const maxOxygenLevel = 100;

    for (let i = 0; i < numberRiders; i++) {
        let currRiderInfo = inputArray.shift();
        currRiderInfo = currRiderInfo.split("|");
        const riderName = currRiderInfo[0];
        const fuelCapacity = Number(currRiderInfo[1]);
        const position = Number(currRiderInfo[2]);
        ridersData[riderName] = {};
        ridersData[riderName]["fuelCapacity"] = fuelCapacity;
        ridersData[riderName]["position"] = position;
    }

    while (true) {
        let commandInfo = inputArray.shift();
        if (commandInfo === "Finish") {
            break;
        }

        commandInfo = commandInfo.split(" - ");
        let currenCommand = commandInfo[0];
        let rider = commandInfo[1];


        if (currenCommand === "StopForFuel") {
            let minFuel = Number(commandInfo[2]);
            let changedPosition = Number(commandInfo[3]);

            if (ridersData[rider]["fuelCapacity"] < minFuel) {
                ridersData[rider]["position"] = changedPosition;
                console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`)
            } else {
                console.log(`${rider} does not need to stop for fuel!`)
            }

        } else if (currenCommand === "Overtaking") {
            let secondRider = commandInfo[2];
            if (ridersData[rider]["position"] < ridersData[secondRider]["position"]) {

                let firstPos = ridersData[rider]["position"];
                let secondPos = ridersData[secondRider]["position"];

                ridersData[rider]["position"] = secondPos;
                ridersData[secondRider]["position"] = firstPos;
                console.log(`${rider} overtook ${secondRider}!`)
            }

        } else if (currenCommand === "EngineFail") {
            let lapsLeft = Number(commandInfo[2]);

            if (ridersData.hasOwnProperty(rider)) {
                delete ridersData[rider]
                console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
            }
        }
    }

    Object.entries(ridersData).forEach(([rider, data]) => {
        let pos = data["position"];
        console.log(`${rider}`);
        console.log(`  Final position: ${pos}`)

    });
}

solve((["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
)
