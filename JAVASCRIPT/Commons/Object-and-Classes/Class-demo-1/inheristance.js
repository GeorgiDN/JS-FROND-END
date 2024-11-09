class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    getDetails() {
        return `${this.brand}, manufactured in ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(brand, year, model) {
        super(brand, year);
        this.model = model;
    }

    getCarDetails () {
        return `${this.getDetails()} - Model: ${this.model}`
    }
}

const myCar = new Car("Toyota", 2021, "Corolla");
console.log(myCar.getCarDetails())
