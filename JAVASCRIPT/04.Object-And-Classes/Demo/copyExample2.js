let original = {
    name: "Alice",
    details: { age: 25, city: "New York" }
};

// Deep copy using JSON methods
let deepCopy = JSON.parse(JSON.stringify(original));

// Modify the deep copy
deepCopy.name = "Bob";
deepCopy.details.age = 30;

console.log(original);
// Output: { name: 'Alice', details: { age: 25, city: 'New York' } }

console.log(deepCopy);
// Output: { name: 'Bob', details: { age: 30, city: 'New York' } }
