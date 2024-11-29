function solve() {
    const info = document.querySelector("#info span");
    const departButton = document.querySelector("#depart");
    const arriveButton = document.querySelector("#arrive");
    const baseUrl = "http://localhost:3030/jsonstore/bus/schedule"

    let currentStop = {
        id: "depot",
        name: "Not Connected"
    }

    async function depart() {
        try {
            const response = await fetch(`${baseUrl}/${currentStop.id}`);
            const data = await response.json();

            currentStop = data;
            let nextStop = currentStop.name;
            info.textContent = `Next stop ${nextStop}`;
            departButton.setAttribute("disabled", "disabled");
            arriveButton.removeAttribute("disabled");

        } catch (_) {
            info.textContent = "Érror";
            arriveButton.setAttribute("disabled", "disabled");
            departButton.setAttribute("disabled", "disabled");
        }
    }

    function arrive() {
        info.textContent = `Arriving at ${currentStop.name}`
        currentStop.id = currentStop.next;
        arriveButton.setAttribute("disabled", "disabled");
        departButton.removeAttribute("disabled");
    }

    return {
        depart,
        arrive
    };
}

let result = solve();

