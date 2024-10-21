function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const inputEl = document.querySelector(".restaurant-race-class #inputs textarea");
        const inputText = JSON.parse(inputEl.value);
        let restaurantData = {};

        inputText.forEach((entry) => {
            let [restaurant, workers] = entry.split(" - ");

            if (!restaurantData[restaurant]) {
                restaurantData[restaurant] = { workers: {}, totalSalaries: 0, workerCount: 0 };
            }

            workers.split(", ").forEach((worker) => {
                let [name, salary] = worker.split(" ");
                salary = Number(salary);

                restaurantData[restaurant].workers[name] = salary;
                restaurantData[restaurant].totalSalaries += salary;
                restaurantData[restaurant].workerCount++;
            });
        });

        let bestRestaurant = "";
        let highestAverageSalary = 0;
        let bestSalary = 0;
        let bestRestaurantWorkers = [];

        Object.entries(restaurantData).forEach(([restaurant, data]) => {
            let currentAverageSalary = data.totalSalaries / data.workerCount;

            if (currentAverageSalary > highestAverageSalary) {
                bestRestaurant = restaurant;
                highestAverageSalary = currentAverageSalary.toFixed(2);
                bestSalary = Math.max(...Object.values(data.workers)).toFixed(2);
                bestRestaurantWorkers = Object.entries(data.workers)
                    .sort((a, b) => b[1] - a[1]);
            }
        });

        let bestRestaurantEl = document.getElementById("bestRestaurant");
        bestRestaurantEl.querySelector("p")
            .textContent = `Name: ${bestRestaurant} Average Salary: ${highestAverageSalary} Best Salary: ${bestSalary}`;

        let bestRestaurantWorkersEl = document.getElementById("workers");
        let bestRestaurantWorkersArray = [];
        bestRestaurantWorkers.forEach(([worker, salary]) => {
            bestRestaurantWorkersArray.push(`Name: ${worker} With Salary: ${salary}`);
        });

        bestRestaurantWorkersEl.querySelector("p").textContent = bestRestaurantWorkersArray.join(" ");
    }
}




// function solve() {
//     document.querySelector('#btnSend').addEventListener('click', onClick);
//
//     function onClick() {
//         const inputEl = document.querySelector(".restaurant-race-class #inputs textarea");
//         const inputText = JSON.parse(inputEl.value);
//         let restaurantData = {};
//
//         inputText.forEach((entry) => {
//             let [restaurant, workers] = entry.split(" - ");
//             if (!restaurantData[restaurant]) {
//                 restaurantData[restaurant] = {};
//             }
//
//             workers.split(", ").forEach((worker) => {
//                 let [name, salary] = worker.split(" ");
//                 restaurantData[restaurant][name] = Number(salary);
//             });
//         });
//
//         let bestRestaurant = "";
//         let highestAverageSalary = 0;
//         let bestSalary = 0;
//         let bestRestaurantWorkers = {};
//
//         Object.entries(restaurantData).forEach(([restaurant, workersData]) => {
//             let sumSalaries = 0;
//             let currentAverageSalary = 0;
//             let sortedWorkersData = Object.entries(workersData)
//                 .sort((a, b) => b[1] - a[1]);
//             let currentBestSalary = sortedWorkersData[0][1];
//
//             sortedWorkersData.forEach(([worker, salary]) => {
//                 sumSalaries += salary;
//             });
//
//             currentAverageSalary = sumSalaries / Object.keys(workersData).length;
//
//             if (currentAverageSalary > highestAverageSalary) {
//                 bestRestaurant = restaurant;
//                 highestAverageSalary = currentAverageSalary.toFixed(2);
//                 bestSalary = currentBestSalary.toFixed(2);
//                 bestRestaurantWorkers = sortedWorkersData;
//             }
//         });
//
//         let bestRestaurantEl = document.getElementById("bestRestaurant");
//         bestRestaurantEl.querySelector("p").textContent =
//             `Name: ${bestRestaurant} Average Salary: ${highestAverageSalary} Best Salary: ${bestSalary}`
//
//         let bestRestaurantWorkersEl = document.getElementById("workers");
//         let bestRestaurantWorkersArray = [];
//         bestRestaurantWorkers.forEach(([worker, salary]) => {
//             bestRestaurantWorkersArray.push(`Name: ${worker} With Salary: ${salary}`);
//         });
//         bestRestaurantWorkersEl.querySelector("p").textContent = bestRestaurantWorkersArray.join(" ");
//     }
// }
