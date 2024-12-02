function solve(inputArray) {
    const numberAstronauts = Number(inputArray.shift())
    let astronautsData = {};
    const maxEnergy = 200;
    const maxOxygenLevel = 100;

    for (let i = 0; i < numberAstronauts; i++) {
        let currAstronautInfo = inputArray.shift();
        currAstronautInfo = currAstronautInfo.split(" ");
        const astronautName = currAstronautInfo[0];
        const oxygenLevel = Number(currAstronautInfo[1]);
        const energyReserves = Number(currAstronautInfo[2]);
        astronautsData[astronautName] = {};
        astronautsData[astronautName]["oxygenLevel"] = oxygenLevel;
        astronautsData[astronautName]["energyReserves"] = energyReserves;
    }

    while (true) {
        let commandInfo = inputArray.shift();
        if (commandInfo === "End") {
            break;
        }

        commandInfo = commandInfo.split(" - ");
        let currenCommand = commandInfo[0];
        let name = commandInfo[1];
        let amount = Number(commandInfo[2]);

        if (currenCommand === "Explore") {

            if (astronautsData[name]["energyReserves"] >= amount) {
                astronautsData[name]["energyReserves"] -= amount;
                console.log(`${name} has successfully explored a new area and now has ${astronautsData[name]["energyReserves"]} energy!`)
            } else {
                console.log(`${name} does not have enough energy to explore!`)
            }

        } else if (currenCommand === "Refuel") {
            if (astronautsData[name]["energyReserves"] + amount <= maxEnergy) {
                astronautsData[name]["energyReserves"] += amount;
                console.log(`${name} refueled their energy by ${amount}!`)
            } else {
                let amountRecovered = maxEnergy - astronautsData[name]["energyReserves"];
                astronautsData[name]["energyReserves"] = maxEnergy;
                console.log(`${name} refueled their energy by ${amountRecovered}!`)
            }

        } else if (currenCommand === "Breathe") {
            if (astronautsData[name]["oxygenLevel"] + amount <= maxOxygenLevel) {
                astronautsData[name]["oxygenLevel"] += amount;
                console.log(`${name} took a breath and recovered ${amount} oxygen!`)
            } else {
                let amountRecovered = maxOxygenLevel - astronautsData[name]["oxygenLevel"];
                astronautsData[name]["oxygenLevel"] = maxOxygenLevel;
                console.log(`${name} took a breath and recovered ${amountRecovered} oxygen!`)
            }
        }
    }

    Object.entries(astronautsData).forEach(([astronaut, data]) => {
        let oxygen = data["oxygenLevel"];
        let energy = data["energyReserves"];
        console.log(`Astronaut: ${astronaut}, Oxygen: ${oxygen}, Energy: ${energy}`)
    });
}


solve(['3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End']
);
