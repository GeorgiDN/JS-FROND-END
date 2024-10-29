let original = {
    name: "Alice",
    details: { age: 25, city: "New York" }
};

// Shallow copy using spread syntax
let shallowCopy = { ...original };

// Modify the shallow copy
shallowCopy.name = "Bob";
shallowCopy.details.age = 30;

console.log(original);
// Output: { name: 'Alice', details: { age: 30, city: 'New York' } }

console.log(shallowCopy);
// Output: { name: 'Bob', details: { age: 30, city: 'New York' } }
