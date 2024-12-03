function solve (inputArray) {
    let horses = inputArray.shift().split("|");

    while (true) {
        let commandInfo = inputArray.shift();
        if (commandInfo === "Finish") {
            break;
        }

        commandInfo = commandInfo.split(" ");
        const currentCommand = commandInfo[0];

        if (currentCommand === "Retake") {
            const overtakingHorse = commandInfo[1];
            const overtakenHorse = commandInfo[2];

            const index1 = horses.indexOf(overtakingHorse);
            const index2 = horses.indexOf(overtakenHorse);

            if (index1 < index2) {
                [horses[index1], horses[index2]] = [horses[index2], horses[index1]];
                console.log(`${overtakingHorse} retakes ${overtakenHorse}.`)
            }

        } else if (currentCommand === "Trouble") {
            const horseName = commandInfo[1];
            const horseIndex = horses.indexOf(horseName);

            if (horseIndex > 0) {
                swap(horseIndex, horseIndex - 1);
                console.log(`Trouble for ${horseName} - drops one position.`)
            }

        } else if (currentCommand === "Rage") {
            const horseName = commandInfo[1];
            const lastIndex = horses.length - 1;
            let horseIndex = horses.indexOf(horseName);

            for (let i = 0; i < 2; i++) {
                if (horseIndex < lastIndex) {
                    swap(horseIndex, horseIndex + 1);
                    horseIndex++;
                }
            }
            console.log(`${horseName} rages 2 positions ahead.`);


        } else if (currentCommand === "Miracle") {
            const horseName = horses.shift();
            horses.push(horseName);
            console.log(`What a miracle - ${horseName} becomes first.`)
        }
    }

    console.log(horses.join("->"));
    console.log(`The winner is: ${horses[horses.length - 1]}`);


    function swap(index1, index2) {
        const swap = horses[index1];
        horses[index1] = horses[index2];
        horses[index2] = swap;
    }
}
