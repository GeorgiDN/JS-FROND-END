function solve(inputArray) {
    let leaders = {};

    inputArray.forEach((input) => {
        let parts = input.split(": ");

        if (input.endsWith("arrives")) {
            let leader = input.split(" arrives")[0];
            if (!leaders[leader]) {
                leaders[leader] = {totalArmyCount: 0, armies: {} };
            }
        } else if (parts.length === 2) {
            let leader = parts[0];
            let armyInfo = parts[1].split(", ");
            let armyName = armyInfo[0];
            let armyCount = Number(armyInfo[1]);

            if (leaders[leader]) {
                if (!leaders[leader].armies[armyName]) {
                    leaders[leader].armies[armyName] = 0;
                }
                leaders[leader].armies[armyName] += armyCount;
                leaders[leader].totalArmyCount += armyCount;
            }
        } else if (input.includes("+")) {
            let [armyName, count] = input.split(" + ");
            let armyCount = Number(count);
            for (let leader in leaders) {
                if (leaders[leader].armies[armyName]) {
                    leaders[leader].armies[armyName] += armyCount;
                    leaders[leader].totalArmyCount += armyCount;
                    break
                }
            }
        } else if (input.endsWith("defeated")) {
            let leader = input.split(" defeated")[0];
            delete leaders[leader];
        }
    });

    let sortedLeaders = Object.entries(leaders)
        .sort((a, b) => b[1].totalArmyCount - a[1].totalArmyCount);

    sortedLeaders.forEach(([leader, {totalArmyCount, armies }]) => {
        console.log(`${leader}: ${totalArmyCount}`);

        let sortedArmies = Object.entries(armies)
            .sort((a, b) => b[1] - a[1]);
        sortedArmies.forEach(([armyName, count]) => {
            console.log(`>>> ${armyName} - ${count}`);
        });
    });
}
