function solve(inputArray) {
    let charactersNumber = inputArray.shift();
    let personsData = {}; // 0-hp;  1-bullets
    let maxBullets = 6;
    let maxHP = 100;

    for (let i = 0; i < charactersNumber; i++) {
        let [name, hp, bullets] = inputArray.shift().split(" ");
        personsData[name] = [Number(hp), Number(bullets)];
    }

    while (true) {
        let data = inputArray.shift();
        if (data === "Ride Off Into Sunset") {
            break;
        }
        data = data.split(" - ");
        let command = data[0];
        let characterName = data[1];

        if (command === "FireShot") {
            let target = data[2];
            if (personsData[characterName][1] > 0) {
                personsData[characterName][1] -= 1;
                console.log(`${characterName} has successfully hit ${target} and now has ${personsData[characterName][1]} bullets!`)
            } else {
                console.log(`${characterName} doesn't have enough bullets to shoot at ${target}!`);
            }

        } else if (command === "TakeHit") {
            let damage = Number(data[2]);
            let attacker = data[3];
            personsData[characterName][0] -= damage;
            if (personsData[characterName][0] > 0) {
                console.log(`${characterName} took a hit for ${damage} HP from ${attacker} and now has ${personsData[characterName][0]} HP!`)
            } else {
                console.log(`${characterName} was gunned down by ${attacker}!`)
                delete personsData[characterName]
            }

        } else if (command === "Reload") {
            let reloadedBullets = maxBullets - personsData[characterName][1];
            if (reloadedBullets === 0) {
                console.log(`${characterName}'s pistol is fully loaded!`);
            } else {
                personsData[characterName][1] = maxBullets;
                console.log(`${characterName} reloaded ${reloadedBullets} bullets!`);
            }

        } else if (command === "PatchUp") {
            let amount = Number(data[2]);
            let recoveredHP = maxHP - personsData[characterName][0];
            if (recoveredHP === 0) {
                console.log(`${characterName} is in full health!`);
            } else {
                recoveredHP = Math.min(maxHP - personsData[characterName][0], amount);
                personsData[characterName][0] += recoveredHP
                console.log(`${characterName} patched up and recovered ${recoveredHP} HP!`)
            }
        }
    }

    for (let [characterName, characterData] of Object.entries(personsData)) {
        console.log(characterName);
        let hpLeft = Number(characterData[0]);
        let bulletsLeft = Number(characterData[1]);
        console.log(` HP: ${hpLeft}`);
        console.log(` Bullets: ${bulletsLeft}`);
    }
}


// solve(["2",
//     "Gus 100 0",
//     "Walt 100 6",
//     "FireShot - Gus - Bandit",
//     "TakeHit - Gus - 100 - Bandit",
//     "Reload - Walt",
//     "Ride Off Into Sunset"])


solve(["2",
    "Gus 100 0",
    "Walt 100 6",
    "TakeHit - Gus - 80 - Bandit",
    "PatchUp - Gus - 20",
    "Ride Off Into Sunset"])
