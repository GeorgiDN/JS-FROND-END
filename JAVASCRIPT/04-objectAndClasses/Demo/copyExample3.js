let original = { name: "Alice", friends: ["Bob", "Charlie"] };

// Shallow copy
let shallowCopy = { ...original };

// Modify the shallow copy's nested array
shallowCopy.friends.push("Dave");

console.log(original.friends);
// Output: ["Bob", "Charlie", "Dave"]
// The original object is affected because the `friends` array was copied by reference!



let deepCopy = { ...original, friends: [...original.friends] };
deepCopy.friends.push("Dave");

console.log(original.friends);
// Output: ["Bob", "Charlie"]
// The original object remains unchanged.
