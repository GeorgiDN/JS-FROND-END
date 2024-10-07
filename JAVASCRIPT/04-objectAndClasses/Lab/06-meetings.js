function solve(inputArray) {
    let schedule = {};

    inputArray.forEach((data) => {
        let [day, name] = data.split(" ");
        if (!schedule.hasOwnProperty(day)) {
            console.log(`Scheduled for ${day}`);
            schedule[day] = name;
        } else {
            console.log(`Conflict on ${day}!`);
        }
    })

    Object.entries(schedule).forEach(([day, name]) => {
        console.log(`${day} -> ${name}`);
    });
}


// function meetings(input) {
//     let schedule = {};
//
//     for (let data of input) {
//         let [day, name] = data.split(" ");
//         if (!(day in schedule)) {
//             console.log(`Scheduled for ${day}`);
//             schedule[day] = name;
//         } else {
//             console.log(`Conflict on ${day}!`);
//         }
//     }
//
//     for (let day in schedule) {
//         console.log(`${day} -> ${schedule[day]}`);
//     }
// }

meetings(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim']
);
