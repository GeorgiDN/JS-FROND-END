function MyClass(value) {
    let privateField = value; // Private variable

    this.getPrivateField = function () {
        return privateField; // Accessing private field within the closure
    };

    this.setPrivateField = function (value) {
        privateField = value;
    };
}

const obj = new MyClass("Hello");
console.log(obj.getPrivateField()); // "Hello"
obj.setPrivateField("New Value");
console.log(obj.getPrivateField()); // "New Value"
