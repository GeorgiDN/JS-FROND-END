function solve (inputArray) {
    let employeesData = {};

    for (let employee of inputArray) {
        employeesData[employee] = employee.length;
    }

    for (let [name, number] of Object.entries(employeesData)) {
        console.log(`Name: ${name} -- Personal Number: ${number}`);
    }

    // Object.entries(employeesData).forEach(([name, number]) => {
    //     console.log(`Name: ${name} -- Personal Number: ${number}`);
    // })
}

solve([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
);
