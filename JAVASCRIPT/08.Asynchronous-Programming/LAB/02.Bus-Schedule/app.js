function solve() {
    const textBox = document.querySelector("#info span");
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");
    const baseUrl = "http://localhost:3030/jsonstore/bus/schedule";

    let currentStop = {
        id: "depot",
        name: "Not Connected"
    };

    async function depart() {
        try {
            const response = await fetch(`${baseUrl}/${currentStop.id}`);
            const data = await response.json();

            currentStop = data;
            console.log(currentStop)
            textBox.textContent = `Next stop ${currentStop.name}`

            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            textBox.textContent = "Error";
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    function arrive() {
        textBox.textContent = `Arriving at ${currentStop.name}`;

        currentStop.id = currentStop.next;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
