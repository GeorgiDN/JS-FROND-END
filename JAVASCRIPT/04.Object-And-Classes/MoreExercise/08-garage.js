function solve(inputArray) {
    let garage = {};

    inputArray.forEach((data) => {
        let [number, carInfo] = data.split(" - ");
        if (!garage.hasOwnProperty(number)) {
            garage[number] = [];
        }
        garage[number].push(carInfo);
    });

    Object.entries(garage).forEach(([num, carInfos]) => {
        console.log(`Garage № ${num}`);
        carInfos.forEach((carInfo) => {
            let formattedCarInfo = carInfo.split(", ").map(info => info.replace(": ", " - ")).join(", ");
            console.log(`--- ${formattedCarInfo}`);
        });
    });
}

solve(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])
