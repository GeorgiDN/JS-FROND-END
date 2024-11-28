async function fetchAll() {
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "foo"));
    const promise3 = 42;

    const results = await Promise.all([promise1, promise2, promise3]);
    console.log(results); // [3, "foo", 42]
}

fetchAll();






// const promise1 = Promise.resolve(2);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "something"));
// const promise3 = 40;
//
// Promise.all([promise1, promise2, promise3])
//     .then((values) => console.log(values)); // [1, "something", 40]
