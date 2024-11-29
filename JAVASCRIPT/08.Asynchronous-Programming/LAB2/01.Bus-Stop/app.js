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
