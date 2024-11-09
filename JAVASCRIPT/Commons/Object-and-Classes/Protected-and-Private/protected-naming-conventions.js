class ParentClass {
    constructor() {
        this._protectedField = "Protected Value"; // Conventionally "protected"
    }
}

class ChildClass extends ParentClass {
    showProtectedField() {
        return this._protectedField; // Can access "protected" field
    }
}

const child = new ChildClass();
console.log(child.showProtectedField()); // "Protected Value"
