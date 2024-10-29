function solve(inputArray) {
    let dictionary = {};

    inputArray.forEach(jsonString => {
        let termData = JSON.parse(jsonString);
        let term = Object.keys(termData)[0];
        let definition = termData[term];
        dictionary[term] = definition;
    })

    let sortedDictionary = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));

    sortedDictionary.forEach(term => {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    });
}

solve([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)

    //
    // inputArray.forEach(jsonString => {
    //     let termData = JSON.parse(jsonString); // Parse JSON string
    //     let term = Object.keys(termData)[0]; // Get the term
    //     let definition = termData[term]; // Get the definition
    //     dictionary[term] = definition; // Add or update the term and definition
    // });
