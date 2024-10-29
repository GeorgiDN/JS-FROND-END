function solve(inputArray) {
    let readyToFly = [];
    let canceledFlightsData = [];
    let flightsNumber = {};

    let flights = inputArray[0];
    flights.forEach((data) => {
        let number = data.split(' ')[0];
        let destination = data.slice(number.length + 1)
        flightsNumber[number] = destination;
        readyToFly.push(destination);
    });

    let flightsToCancel = inputArray[1];
    flightsToCancel.forEach((data) => {
        let number = data.split(' ')[0];
        if (flightsNumber.hasOwnProperty(number)) {
            let cancelDestination = flightsNumber[number];
            canceledFlightsData.push(cancelDestination);
            let index = readyToFly.indexOf(cancelDestination);
            readyToFly.splice(index, 1)
        }
    });

    let statusInfo = inputArray[2];
    if (statusInfo[0] === 'Cancelled') {
        canceledFlightsData.sort((a, b) => a.localeCompare(b))
        canceledFlightsData.forEach((destination) => {
            let canceledFlightsDictionary = {'Destination': destination, 'Status': 'Cancelled'}
            console.log(canceledFlightsDictionary)
        })

    } else {
        readyToFly.forEach((destination) => {
            let readyToFlyDictionary = {'Destination': destination, 'Status': 'Ready to fly'}
            console.log(readyToFlyDictionary);
        });
    }
}


// solve([['WN269 Delaware',
//    'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
//     ['DL2120 Cancelled',
// 	'WN612 Cancelled',
// 	'WN1173 Cancelled',
// 	'SK430 Cancelled'],
// 	['Cancelled']
// ]
// )



solve([['WN269 Delaware',
   'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
	'WN612 Cancelled',
	'WN1173 Cancelled',
	'SK330 Cancelled'],
	['Ready to fly']
]
)




