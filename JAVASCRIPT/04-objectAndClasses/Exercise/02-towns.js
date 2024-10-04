function solve(inputArray) {
    let townsData = {};

    for (let data of inputArray) {
        let [townName, latitude, longitude] = data.split(" | ");
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        townsData["town"] = townName;
        townsData["latitude"] = latitude;
        townsData["longitude"] = longitude;
        console.log(townsData);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);






