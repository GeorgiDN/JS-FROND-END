function convertToObject(stringJson) {
    let data = JSON.parse(stringJson);

    Object.keys(data).forEach(key => {
        console.log(`${key}: ${data[key]}`)
    });
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
