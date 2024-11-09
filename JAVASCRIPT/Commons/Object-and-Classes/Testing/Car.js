class Car {
    constructor(model, year, kilometers) {
        this.model = model;
        this.year = year;
        this.kilometers = kilometers;
    }

    get model() {
        return this._model;
    }

    set model(value) {
        if (!value) {
            throw new Error("Model cannot be empty!");
        }
        this._model = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (value < 0) {
            throw new Error("Year cannot be negative!");
        }
        this._year = value;
    }

    get kilometers() {
        return this._kilometers;
    }

    set kilometers(value) {
        if (value < 0) {
            throw new Error("Kilometers cannot be negative!");
        }
        this._kilometers = value;
    }

    drive(passedKilometers) {
        if (passedKilometers < 0) {
            throw new Error("Passed kilometers cannot be negative!");
        }
        this.kilometers += passedKilometers;
    }

    getDetails() {
        return `Model: ${this.model}, Year: ${this.year}, Kilometers: ${this.kilometers}`;
    }
}

module.exports = Car;

// car1 = new Car("Audi", 2000, 10000);
// console.log(car1.getDetails());
// car1.drive(10000);
// console.log(car1.getDetails());

