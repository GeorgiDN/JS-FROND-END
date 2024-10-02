function addressBook(input) {
    let addressData = {};

    for (let data of input) {
        let [name, address] = data.split(":");

        addressData[name] = address;
    }

    let sortedAddressByName = Object.entries(addressData)
        .sort(([a], [b]) => a.localeCompare(b));

    sortedAddressByName = Object.fromEntries(sortedAddressByName);

    for (let [name, address] of Object.entries(sortedAddressByName)) {
        console.log(`${name} -> ${address}`);
    }
}


// function addressBook(input) {
//     let addressData = {};
//
//     input.forEach(data => {
//         let [name, address] = data.split(":");
//         addressData[name] = address;
//     });
//
//     Object.entries(addressData)
//         .sort((a, b) => a[0].localeCompare(b[0]))
//         .forEach(([name, address]) => console.log(`${name} -> ${address}`));
// }


addressBook(['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd']
)
