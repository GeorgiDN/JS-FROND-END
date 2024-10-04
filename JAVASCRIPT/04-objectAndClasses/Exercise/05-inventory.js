function solve(inputArray) {
    let outputData = [];

    inputArray.forEach((data) => {
        let [name, level, items] = data.split(" / ");
        level = Number(level);
        outputData.push({Hero: name, level: level, items: items})
    })
    let sortedDataByLevel = [...outputData].sort((a, b) => a.level - b.level);

    sortedDataByLevel.forEach((row) => {
        console.log(`Hero: ${row.Hero}`)
        console.log(`level => ${row.level }`)
        console.log(`items => ${row.items}`)
    });
}

solve([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
)
