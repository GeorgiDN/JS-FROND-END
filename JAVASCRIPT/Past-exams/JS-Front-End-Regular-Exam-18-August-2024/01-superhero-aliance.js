function solve(inputArray) {
    const numberSuperheroes = Number(inputArray.shift());
    const maxEnergy = 100;
    let superheroesData = {};

    superheroesData = takeData();

    while (true) {
        let command = inputArray.shift();
        if (command === "Evil Defeated!" ) {
            break;
        }

        let data = command.split(" * ");
        let currentCommand = data[0];
        let name = data[1];

        if (currentCommand === "Use Power") {
            let superPower = data[2];
            let energyRequired = Number(data[3]);

            superheroesData = usePower(name, superPower, energyRequired);

        } else if (currentCommand === "Train") {
            let trainingEnergy = Number(data[2]);

            superheroesData = train(name, trainingEnergy);

        } else if (currentCommand === "Learn") {
            let newSuperPower = data[2];

            superheroesData = learn(name, newSuperPower);
        }
    }

    Object.entries(superheroesData).forEach(([name, data]) => {
        console.log(`Superhero: ${name}`);
        let superpowers = data["superpowers"];
        let energy = data["energy"];
        console.log(`- Superpowers: ${superpowers.join(", ")}`);
        console.log(`- Energy: ${energy}`);
    })

    function takeData() {
        for (let i = 0; i < numberSuperheroes; i++) {
            let [name, superpower, energy] = inputArray.shift().split("-");
            let superPowersArr = superpower.split(",");
            energy = Number(energy);
            superheroesData[name] = {"superpowers": superPowersArr, "energy": energy}
        }
        return superheroesData;
    }

    function usePower(name, superPower, energyRequired) {
        if ((superheroesData[name]["superpowers"].includes(superPower)) && (superheroesData[name]["energy"] - energyRequired >= 0)) {
            superheroesData[name]["energy"] -= energyRequired;
            console.log(`${name} has used ${superPower} and now has ${superheroesData[name]["energy"]} energy!`);
        } else {
            console.log(`${name} is unable to use ${superPower} or lacks energy!`)
        }
        return superheroesData;
    }

    function train(name, trainingEnergy) {
        if (superheroesData[name]["energy"] === maxEnergy) {
            console.log(`${name} is already at full energy!`)
        } else {
            let gainedEnergy;
            if (superheroesData[name]["energy"] + trainingEnergy <= maxEnergy) {
                gainedEnergy = trainingEnergy;
            } else {
                gainedEnergy = maxEnergy - superheroesData[name]["energy"];
            }
            superheroesData[name]["energy"] += gainedEnergy;
            console.log(`${name} has trained and gained ${gainedEnergy} energy!`)
        }
        return superheroesData;
    }

    function learn(name, newSuperPower) {
        if (superheroesData[name]["superpowers"].includes(newSuperPower)) {
            console.log(`${name} already knows ${newSuperPower}.`)
        } else {
            superheroesData[name]["superpowers"].push(newSuperPower);
            console.log(`${name} has learned ${newSuperPower}!`)
        }
        return superheroesData;
    }
}

solve(([
        "3",
        "Iron Man-Repulsor Beams,Flight-80",
        "Thor-Lightning Strike,Hammer Throw-10",
        "Hulk-Super Strength-60",
        "Use Power * Iron Man * Flight * 30",
        "Train * Thor * 20",
        "Train * Hulk * 50",
        "Learn * Hulk * Thunderclap",
        "Use Power * Hulk * Thunderclap * 70",
        "Evil Defeated!"
    ])
)
