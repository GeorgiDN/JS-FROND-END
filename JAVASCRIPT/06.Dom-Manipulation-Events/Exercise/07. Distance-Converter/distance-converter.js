document.addEventListener('DOMContentLoaded', solve);

function solve() {
    document.querySelector("#convert").addEventListener("click", convertValues);

    const unitsToMeters = {
        km: (value) => value * 1000,
        m: (value) => value,
        cm: (value) => value * 0.01,
        mm: (value) => value * 0.001,
        mi: (value) => value * 1609.34,
        yrd: (value) => value * 0.9144,
        ft: (value) => value * 0.3048,
        in: (value) => value * 0.0254,
    };

    const metersToOtherUnits = {
        km: (value) => value / 1000,
        m: (value) => value,
        cm: (value) => value / 0.01,
        mm: (value) => value / 0.001,
        mi: (value) => value / 1609.34,
        yrd: (value) => value / 0.9144,
        ft: (value) => value / 0.3048,
        in: (value) => value / 0.0254,
    };

    function convertValues() {
        const inputDistance = Number(document.querySelector("#inputDistance").value);
        const inputUnits = document.querySelector("#inputUnits").value;
        const outputUnits = document.querySelector("#outputUnits").value;
        const convertedToMeters = unitsToMeters[inputUnits](inputDistance);
        const result = metersToOtherUnits[outputUnits](convertedToMeters);

        document.querySelector("#outputDistance").value = result;
    }
}
