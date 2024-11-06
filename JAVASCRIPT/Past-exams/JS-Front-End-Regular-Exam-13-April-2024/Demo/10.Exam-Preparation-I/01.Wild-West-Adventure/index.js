function adventure(input) {
    const charactersCount = Number(input.shift());
    const posse = {};

    for (let i = 0; i < charactersCount; i++) {
        const [characterName, hpInput, bulletsInput] = input.shift().split(' ');

        posse[characterName] = {
            hp: Number(hpInput),
            bullets: Number(bulletsInput),
        };
    }

    const commands = {
        FireShot(characterName, target) {
            if (posse[characterName].bullets) {
                const currentBullets = --posse[characterName].bullets;
                console.log(`${characterName} has successfully hit ${target} and now has ${currentBullets} bullets!`);
            } else {
                console.log(`${characterName} doesn't have enough bullets to shoot at ${target}!`);
            }
        },
        TakeHit(characterName, damage, attacker) {
            damage = Number(damage);
            posse[characterName].hp -= damage;
            const curentHp = posse[characterName].hp;
            if (curentHp > 0) {
                console.log(`${characterName} took a hit for ${damage} HP from ${attacker} and now has ${curentHp} HP!`);
            } else {
                delete posse[characterName];

                console.log(`${characterName} was gunned down by ${attacker}!`);
            }
        },
        Reload(characterName) {
            const currentBullets = posse[characterName].bullets;
            if (currentBullets < 6) {
                posse[characterName].bullets = 6;
                console.log(`${characterName} reloaded ${6 - currentBullets} bullets!`);
            } else {
                console.log(`${characterName}'s pistol is fully loaded!`);
            }
        },
        PatchUp(characterName, amound) {
            amound = Number(amound);
            const currentHp = posse[characterName].hp;
            if (currentHp < 100) {
                const newHp = Math.min(currentHp + amound, 100);
                posse[characterName].hp = newHp;

                const recoveredAmound = newHp - currentHp;
                console.log(`${characterName} patched up and recovered ${recoveredAmound} HP!`);
            } else {
                console.log(`${characterName} is in full health!`);
            }
        }
    };

    let commandInput = input.shift();

    while (commandInput !== 'Ride Off Into Sunset') {
        const [command, characterName, ...args] = commandInput.split(' - ')

        commands[command](characterName, ...args);

        commandInput = input.shift();
    }

    Object.keys(posse)
        .forEach(characterName => {
            console.log(characterName);
            console.log(`HP: ${posse[characterName].hp}`);
            console.log(`Bullets: ${posse[characterName].bullets}`);
        })
    
}

adventure((["2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
    "TakeHit - Walt - 30 - Bandit",
    "PatchUp - Walt - 20",
    "Reload - Jesse",
    "Ride Off Into Sunset"])
);
