function solve(inputArray) {
    const numberChemicals = Number(inputArray.shift());
    let chemicalsData = {};
    let chemicalsFormula = {};

    chemicalsData = takeData(chemicalsData)

    while (true) {
        let command = inputArray.shift();
        if (command === "End") {
            break
        }

        let data = command.split(" # ");
        let currentCommand = data[0];
        let chemicalName = data[1];

        if (currentCommand === "Mix") {
            let chemicalNameSecond = data[2];
            let amount = Number(data[3]);
            chemicalsData = mixChemicals(chemicalsData, chemicalName, chemicalNameSecond, amount);

        } else if (currentCommand === "Replenish") {
            let amount = Number(data[2]);
            chemicalsData = replenishChemical(chemicalsData, chemicalName, amount);

        } else if (currentCommand === "Add Formula") {
            let formula = data[2];
            chemicalsFormula = addFormula(chemicalsData, chemicalName, formula, chemicalsFormula);
        }
    }

    let result = [];
    Object.entries(chemicalsData).forEach(([chemical, quantity]) => {
        if (chemicalsFormula.hasOwnProperty(chemical)) {
            result.push(`Chemical: ${chemical}, Quantity: ${quantity}, Formula: ${chemicalsFormula[chemical]}`);

        } else {
            result.push(`Chemical: ${chemical}, Quantity: ${quantity}`);
        }
    });

    console.log(result.join("\n"))

    function takeData(chemicalsData) {
        for (let i = 0; i < numberChemicals; i++) {
            let [chemicalName, quantity] = inputArray.shift().split(" # ");
            quantity = Number(quantity);
            chemicalsData[chemicalName] = quantity;

        }
        return chemicalsData;
    }

    function mixChemicals(chemicalsData, chemicalName, chemicalNameSecond, amount) {
        if (chemicalsData[chemicalName] >= amount && chemicalsData[chemicalNameSecond] >= amount) {
            chemicalsData[chemicalName] -= amount;
            chemicalsData[chemicalNameSecond] -= amount;
            console.log(`${chemicalName} and ${chemicalNameSecond} have been mixed. ${amount} units of each were used.`)

        } else {
            console.log(`Insufficient quantity of ${chemicalName}/${chemicalNameSecond} to mix.`);
        }
        return chemicalsData;
    }

    function replenishChemical(chemicalsData, chemicalName, amount) {
        if (!chemicalsData.hasOwnProperty(chemicalName)) {
            console.log(`The Chemical ${chemicalName} is not available in the lab.`);

        } else if (chemicalsData[chemicalName] + amount > 500) {
            let addedAmount = 500 - chemicalsData[chemicalName];
            chemicalsData[chemicalName] = 500;
            console.log(`${chemicalName} quantity increased by ${addedAmount} units, reaching maximum capacity of 500 units!`)

        } else {
            chemicalsData[chemicalName] += amount;
            console.log(`${chemicalName} quantity increased by ${amount} units!`);
        }
        return chemicalsData;
    }

    function addFormula(chemicalsData, chemicalName, formula, chemicalsFormula) {
        if (!chemicalsData.hasOwnProperty(chemicalName)) {
            console.log(`The Chemical ${chemicalName} is not available in the lab.`);

        } else {
            chemicalsFormula[chemicalName] = formula;
            console.log(`${chemicalName} has been assigned the formula ${formula}.`)
        }

        return chemicalsFormula;
    }
}

solve([ '4',
  'Water # 200',
  'Salt # 100',
  'Acid # 50',
  'Base # 80',
  'Mix # Water # Salt # 50',
  'Replenish # Salt # 150',
  'Add Formula # Acid # H2SO4',
  'End']
)
