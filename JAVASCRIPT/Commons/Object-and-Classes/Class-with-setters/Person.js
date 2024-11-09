class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (!value) {
            throw new Error("Name cannot be empty")
        }
        this._name = value;
    }

    get age() {
        return this._age
    }

    set age(value) {
        if (value < 0) {
            throw new Error("Age can not be negative")
        }
        this._age = value
    }
}

try {
    const person1 = new Person("Alice", 30);
    console.log(person1.name);
    console.log(person1.age);

    person1.age = 25;
} catch (error) {
    console.error(error.message);
}
