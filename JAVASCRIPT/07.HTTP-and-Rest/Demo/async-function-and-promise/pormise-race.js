const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "First"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "Second"));

Promise.race([promise1, promise2])
    .then((value) => console.log(value)); // "First"
