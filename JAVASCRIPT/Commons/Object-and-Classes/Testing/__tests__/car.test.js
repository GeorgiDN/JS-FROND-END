// car.test.js
const Car = require('../Car.js'); // Adjust this path accordingly

describe("Car Class Tests", () => {

    test("Should initialize with given values", () => {
        const car = new Car("Audi", 2000, 10000);
        expect(car.model).toBe("Audi");
        expect(car.year).toBe(2000);
        expect(car.kilometers).toBe(10000);
    });

    test("Should throw an error if model is empty", () => {
        expect(() => new Car("", 2000, 10000)).toThrow("Model cannot be empty!");
    });

    test("Should throw an error if year is negative", () => {
        expect(() => new Car("Audi", -2000, 10000)).toThrow("Year cannot be negative!");
    });

    test("Should throw an error if kilometers is negative", () => {
        expect(() => new Car("Audi", 2000, -10000)).toThrow("Kilometers cannot be negative!");
    });

    test("drive() should increase kilometers correctly", () => {
        const car = new Car("Audi", 2000, 10000);
        car.drive(5000);
        expect(car.kilometers).toBe(15000);
    });

    test("drive() should throw an error if passedKilometers is negative", () => {
        const car = new Car("Audi", 2000, 10000);
        expect(() => car.drive(-5000)).toThrow("Passed kilometers cannot be negative!");
    });

    test("getDetails() should return the correct string", () => {
        const car = new Car("Audi", 2000, 10000);
        expect(car.getDetails()).toBe("Model: Audi, Year: 2000, Kilometers: 10000");
    });
});
