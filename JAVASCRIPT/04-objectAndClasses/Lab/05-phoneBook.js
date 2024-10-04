function phoneBookFunction(input) {
    let phonebook = {};

    for (let data of input) {
        let [name, phone] = data.split(" ");
        phonebook[name]= phone;
    }

    for (let name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`);
    }
}

phoneBookFunction(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']
)
