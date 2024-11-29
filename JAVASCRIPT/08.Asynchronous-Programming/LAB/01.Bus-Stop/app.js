async function getInfo() {
    const baseUrl = "http://localhost:3030/jsonstore/bus/businfo";
    const stopNameEl = document.querySelector("#stopName");
    const busesList = document.querySelector("#buses");

    busesList.innerHTML = "";

    try {
        const stopId = document.querySelector("#stopId").value;
        const response = await fetch(`${baseUrl}/${stopId}`);
        const data = await response.json();

        stopNameEl.textContent = data.name;
        Object.entries(data.buses).forEach(([busId, time]) => {
            const liElement = document.createElement("li");
            liElement.textContent = `Bus ${busId} arrives in ${time} minutes`;
            busesList.appendChild(liElement);
        });
    } catch (_) {
        stopNameEl.textContent = "Error";
    }
}



// function getInfo() {
//     const baseUrl = "http://localhost:3030/jsonstore/bus/businfo";
//     const stopElement = document.getElementById("stopId");
//     const stopNameElement = document.getElementById("stopName");
//     const busesElement = document.getElementById("buses");
//
//     const stopId = stopElement.value;
//     fetch(`${baseUrl}/${stopId}`)
//         .then(res => res.json())
//         .then(data => {
//             stopNameElement.textContent = data.name
//
//             for (const bussId in data.buses) {
//                 const liElement = document.createElement("li");
//                 liElement.textContent = `Bus ${bussId} arrives in ${data.buses[bussId]} minutes`;
//                 busesElement.appendChild(liElement);
//             }
//         })
//     .catch(() => {
//         stopNameElement.textContent = "Error"
//     })
// }
