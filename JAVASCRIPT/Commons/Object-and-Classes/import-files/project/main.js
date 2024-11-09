// create package.json -> 'npm init -y' in TERMINAL
// add "type": "module", in package.json


import Car from "./Car.js";

const myCar = new Car("Toyota", 2021, "Corolla");
console.log(myCar.getCarDetails())
