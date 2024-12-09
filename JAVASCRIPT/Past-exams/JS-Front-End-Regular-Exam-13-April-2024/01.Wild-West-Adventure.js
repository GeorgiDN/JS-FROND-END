function solve(inputArray) {
    const numberCharacters = Number(inputArray.shift());
    let heroesData = {};
    const maxBullets = 6;
    const maxHP = 100;

    takeHeroesData();
    taskProcess();
    printResult();

    function takeHeroesData() {
        for (let i = 0; i < numberCharacters; i++) {
            const heroInfo = inputArray.shift().split(" ");
            const heroName = heroInfo[0];
            const hp = Number(heroInfo[1]);
            const bullets = Number(heroInfo[2]);

            heroesData[heroName] = {};
            heroesData[heroName]["hp"] = hp;
            heroesData[heroName]["bullets"] = bullets;
        }
    }

    function taskProcess() {
        while (true) {
            let commandInfo = inputArray.shift();
            if (commandInfo === "Ride Off Into Sunset") {
                break;
            }

            commandInfo = commandInfo.split(" - ");
            const currentCommand = commandInfo[0];
            const name = commandInfo[1];

            if (currentCommand === "FireShot") {
                const target = commandInfo[2];
                fireShot(name, target);

            } else if (currentCommand === "TakeHit") {
                const damage = Number(commandInfo[2]);
                const attacker = commandInfo[3];
                takeHit(name, damage, attacker);

            } else if (currentCommand === "Reload") {
                reload(name);

            } else if (currentCommand === "PatchUp") {
                const amount = Number(commandInfo[2]);
                patchUp(name, amount);
            }
        }
    }

    function takeHit(name, damage, attacker) {
        heroesData[name]["hp"] -= damage;
        if (heroesData[name]["hp"] > 0) {
            console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${heroesData[name]["hp"]} HP!`);
        } else {
            console.log(`${name} was gunned down by ${attacker}!`)
            delete heroesData[name];
        }
    }

    function fireShot(name, target) {
        if (heroesData[name]["bullets"] > 0) {
            heroesData[name]["bullets"] -= 1;
            console.log(`${name} has successfully hit ${target} and now has ${heroesData[name]["bullets"]} bullets!`);
        } else {
            console.log(`${name} doesn't have enough bullets to shoot at ${target}!`)
        }
    }

    function reload(name) {
        if (heroesData[name]["bullets"] < maxBullets) {
            const bulletsReloaded = maxBullets - heroesData[name]["bullets"];
            console.log(`${name} reloaded ${bulletsReloaded} bullets!`);
            heroesData[name]["bullets"] = maxBullets;
        } else {
            console.log(`${name}'s pistol is fully loaded!`)
        }
    }

    function patchUp(name, amount) {
        if (heroesData[name]["hp"] === maxHP) {
            console.log(`${name} is in full health!`);
        } else {
            const hpRecovered = Math.min(amount, maxHP - heroesData[name]["hp"]);
            heroesData[name]["hp"] += hpRecovered;
            console.log(`${name} patched up and recovered ${hpRecovered} HP!`)
        }
    }

    function printResult() {
        Object.entries(heroesData).forEach(([heroName, data]) => {
            console.log(heroName);
            console.log(` HP: ${data["hp"]}`);
            console.log(` Bullets: ${data["bullets"]}`);
        });
    }
}


solve((["2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
    "TakeHit - Walt - 30 - Bandit",
    "PatchUp - Walt - 20",
    "Reload - Jesse",
    "Ride Off Into Sunset"])
)


solve(["2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
    "TakeHit - Walt - 30 - Bandit",
    "PatchUp - Walt - 20",
    "Reload - Jesse",
    "Ride Off Into Sunset"])


solve(["2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"])




// function solve(inputArray) {
//     let charactersNumber = inputArray.shift();
//     let personsData = {}; // 0-hp;  1-bullets
//     let maxBullets = 6;
//     let maxHP = 100;
//
//     for (let i = 0; i < charactersNumber; i++) {
//         let [name, hp, bullets] = inputArray.shift().split(" ");
//         personsData[name] = [Number(hp), Number(bullets)];
//     }
//
//     while (true) {
//         let data = inputArray.shift();
//         if (data === "Ride Off Into Sunset") {
//             break;
//         }
//         data = data.split(" - ");
//         let command = data[0];
//         let characterName = data[1];
//
//         if (command === "FireShot") {
//             let target = data[2];
//             if (personsData[characterName][1] > 0) {
//                 personsData[characterName][1] -= 1;
//                 console.log(`${characterName} has successfully hit ${target} and now has ${personsData[characterName][1]} bullets!`)
//             } else {
//                 console.log(`${characterName} doesn't have enough bullets to shoot at ${target}!`);
//             }
//
//         } else if (command === "TakeHit") {
//             let damage = Number(data[2]);
//             let attacker = data[3];
//             personsData[characterName][0] -= damage;
//             if (personsData[characterName][0] > 0) {
//                 console.log(`${characterName} took a hit for ${damage} HP from ${attacker} and now has ${personsData[characterName][0]} HP!`)
//             } else {
//                 console.log(`${characterName} was gunned down by ${attacker}!`)
//                 delete personsData[characterName]
//             }
//
//         } else if (command === "Reload") {
//             let reloadedBullets = maxBullets - personsData[characterName][1];
//             if (reloadedBullets === 0) {
//                 console.log(`${characterName}'s pistol is fully loaded!`);
//             } else {
//                 personsData[characterName][1] = maxBullets;
//                 console.log(`${characterName} reloaded ${reloadedBullets} bullets!`);
//             }
//
//         } else if (command === "PatchUp") {
//             let amount = Number(data[2]);
//             let recoveredHP = maxHP - personsData[characterName][0];
//             if (recoveredHP === 0) {
//                 console.log(`${characterName} is in full health!`);
//             } else {
//                 recoveredHP = Math.min(maxHP - personsData[characterName][0], amount);
//                 personsData[characterName][0] += recoveredHP
//                 console.log(`${characterName} patched up and recovered ${recoveredHP} HP!`)
//             }
//         }
//     }
//
//     for (let [characterName, characterData] of Object.entries(personsData)) {
//         console.log(characterName);
//         let hpLeft = Number(characterData[0]);
//         let bulletsLeft = Number(characterData[1]);
//         console.log(` HP: ${hpLeft}`);
//         console.log(` Bullets: ${bulletsLeft}`);
//     }
// }
