function city(info) {
    for (let [key, value] of Object.entries(info)) {
        console.log(`${key} -> ${value}`)
    }
}


// function city(info) {
//     for (let key of Object.keys(info)) {
//         console.log(`${key} -> ${info[key]}`);
//     }
// }


city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)

