import Vehicle from "./Vehicle.js";

class Car extends Vehicle {
    constructor(brand, year, model) {
        super(brand, year);
        this.model = model;
    }

    getCarDetails () {
        return `${this.getDetails()} - Model: ${this.model}`
    }
}

export default Car;

