// const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "First"));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "Second"));
//
// Promise.race([promise1, promise2])
//     .then((value) => console.log(value)); // "First"


async function fetchFastest() {
    const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "First"));
    const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "Second"));

    const fastestResult = await Promise.race([promise1, promise2]);
    console.log(fastestResult); // "First"
}

fetchFastest();
