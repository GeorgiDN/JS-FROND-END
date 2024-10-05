function solve(input) {
    let parking = new Set();

    input.forEach(data => {
        let [direction, carNumber] = data.split(", ");
        if (direction === "IN") {
            parking.add(carNumber);
        } else if (direction === "OUT") {
            parking.delete(carNumber);
        }
    });

    if (parking.size > 0) {
        Array.from(parking)
            .sort((a, b) => a.localeCompare(b))
            .forEach(carNumber => console.log(carNumber));
    } else {
        console.log("Parking Lot is Empty");
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);


solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);
