// Declaration (using object syntax)
let phonebook = {
    'Pesho': '123123123',
    'Gosho': '324234234',
    'Stamat': '12312312',
    'John Doe': null,
};

// Object literal with dynmic property name
let emergencyContact = 'Mariyka';
let phonebook2 = {
    'Pesho': '123123123',
    'Gosho': '324234234',
    'Stamat': '12312312',
    [emergencyContact]: '123123123',
};

console.log(phonebook2);

// Loop with object keys or values
let names = Object.keys(phonebook);
for (const name of names) {
    console.log(`${name} -> ${phonebook[name]}`);
}

// builtin for..in
console.log('For..in------');
for (const name in phonebook) {
    console.log(`${name} -> ${phonebook[name]}`);
}

// Check for property value
if (phonebook['Pesho']) {
    console.log('Pesho has phone');
}

// Check if property is present
if (phonebook.hasOwnProperty('John Doe')) {
    console.log('John Doe is present in the phonebook');
}

// Remove property from object
delete phonebook['John Doe'];
console.log(phonebook);

console.log("------------------------------------------------------------")
console.log("-------------------------Sort By key------------------------")
// Sorting associative array by key

let phonebookEntries = Object.entries(phonebook);
console.log(phonebookEntries);

phonebookEntries.sort((a, b) => a[0].localeCompare(b[0]));
// phonebookEntries.sort(([nameA], [nameB]) => nameA.localeCompare(nameB));

for (const [name, phone] of phonebookEntries) {
    console.log(`${name} -> ${phone}`);
}

const sortedPhonebook = Object.fromEntries(phonebookEntries);
console.log(sortedPhonebook);


console.log()
console.log("---------------------Sort by value-----------------------------")
// Sort associative array by value
let towns = {
    'Pleven': 80000,
    'Sofia': 1236000,
    'Bourgas': 200000,
    'Plovdiv': 340000,
};

let townEntries = Object.entries(towns);
townEntries
    .sort((a, b) => b[1] - a[1])
    .forEach(town => console.log(`${town[0]} -> ${town[1]}`));


towns = {
    'Pleven': 80000,
    'Sofia': 1236000,
    'Bourgas': 200000,
    'Plovdiv': 340000,
    'Varna': 340000, // Example of a city with the same population as 'Plovdiv'
};


console.log()
console.log("---------------------Sort by value and key-----------------------------")
townEntries = Object.entries(towns);
townEntries
    .sort((a, b) => {
        // First, compare by value (population)
        if (b[1] === a[1]) {
            // If the values are the same, compare by key (name)
            return a[0].localeCompare(b[0]);
        }
        // Otherwise, compare by value
        return a[1] - b[1];
    })
    .forEach(town => console.log(`${town[0]} -> ${town[1]}`));