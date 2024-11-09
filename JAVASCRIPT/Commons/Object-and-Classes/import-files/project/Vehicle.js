class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    getDetails() {
        return `${this.brand}, manufactured in ${this.year}`
    }
}

export default Vehicle;
