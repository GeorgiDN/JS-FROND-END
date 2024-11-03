function getInfo() {
    const baseUrl = "http://localhost:3030/jsonstore/bus/businfo";
    const stopElement = document.getElementById("stopId");
    const stopNameElement = document.getElementById("stopName");
    const busesElement = document.getElementById("buses");

    const stopId = stopElement.value;
    fetch(`${baseUrl}/${stopId}`)
        .then(res => res.json())
        .then(data => {
            stopNameElement.textContent = data.name

            for (const bussId in data.buses) {
                const liElement = document.createElement("li");
                liElement.textContent = `Bus ${bussId} arrives in ${data.buses[bussId]} minutes`;
                busesElement.appendChild(liElement);
            }
        })
    .catch(() => {
        stopNameElement.textContent = "Error"
    })
}






// async function getInfo() {
//     const desiredID = document.querySelector("#stopId").value;
//     const resultTitle = document.querySelector("#stopName");
//     const resultList = document.querySelector("#buses");
//     resultList.innerHTML = "";
//
//     try {
//         response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${desiredID}`);
//         parsedData = await response.json();
//
//         resultTitle.textContent = parsedData.name
//         Object.entries(parsedData.buses).forEach(([busId, time]) => {
//             let listItem = document.createElement("li")
//             listItem.textContent = `Bus ${busId} arrives in ${time} minutes`
//             resultList.appendChild(listItem)
//         })
//     } catch (_) {
//         resultTitle.textContent = "Error"
//     }
// }
