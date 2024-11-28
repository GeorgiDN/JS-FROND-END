// console.log("Start of script");
//
// // Simulate a network request using an async function
// async function fetchData() {
//     console.log("Fetching data...");
//
//     const response = await new Promise(resolve => {
//         setTimeout(() => resolve("Data received"), 2000); // Simulates a 2-second delay
//     });
//
//     console.log(response); // This runs after the promise resolves
// }
//
// fetchData();
//
// console.log("End of script");



console.log("Start of script");

function fetchData() {
    console.log("Fetching data...");

    new Promise(resolve => {
        setTimeout(() => resolve("Data received"), 2000);
    }).then(response => {
        console.log(response);
    });
}

fetchData();

console.log("End of script");
