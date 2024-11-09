class MyClass {
    #privateField; // Private field
    constructor(value) {
        this.#privateField = value;
    }

    getPrivateField() {
        return this.#privateField; // Accessing private field within the class
    }
}

const obj = new MyClass("Hello");
// console.log(obj.#privateField); // Error: private field '#privateField' must be declared in an enclosing class
console.log(obj.getPrivateField()); // Works: "Hello"
