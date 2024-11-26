document.addEventListener('DOMContentLoaded', solve)

function solve() {
    const values = {days: 86400, hours: 3600, minutes: 60, seconds: 1}
    const inputElDays = document.getElementById("days-input");
    const inputElHours = document.getElementById("hours-input");
    const inputElMinutes = document.getElementById("minutes-input");
    const inputElSeconds = document.getElementById("seconds-input");

    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", handleSubmitEvent);
    });

    function handleSubmitEvent(e) {
        e.preventDefault();

        const currentInputEl = e.target.querySelector('input[type="number"]');
        const currentValue = Number(currentInputEl.value);

        if (currentValue < 1 ) return;

        const key = currentInputEl.getAttribute("id").split("-input")[0];
        const multiplier = values[key];
        updateValues(currentValue * multiplier);
    }

    function updateValues(secondAmount) {
        inputElDays.value = Number(secondAmount / values.days).toFixed(2);
        inputElHours.value = Number(secondAmount / values.hours).toFixed(2);
        inputElMinutes.value = Number(secondAmount / values.minutes).toFixed(2);
        inputElSeconds.value = Number(secondAmount / values.seconds).toFixed(2);
    }
}


// function solve() {
//     const daysField = document.getElementById("days-input");
//     const daysButton = document.getElementById("daysBtn");
//     const hoursField = document.getElementById("hours-input");
//     const hoursButton = document.getElementById("hoursBtn");
//     const minutesField = document.getElementById("minutes-input");
//     const minutesButton = document.getElementById("minutesBtn");
//     const secondsField = document.getElementById("seconds-input");
//     const secondsButton = document.getElementById("secondsBtn");
//
//     daysButton.addEventListener("click", (e) => {
//         e.preventDefault()
//         hoursField.value = Number(daysField.value * 24);
//         minutesField.value = Number(daysField.value * 24 * 60);
//         secondsField.value = Number(daysField.value * 24 * 60 * 60);
//     });
//
//     hoursButton.addEventListener("click", (e) => {
//         e.preventDefault()
//         daysField.value = Number(hoursField.value / 24);
//         minutesField.value = Number(hoursField.value * 60);
//         secondsField.value = Number(hoursField.value * 60 * 60);
//     });
//
//     minutesButton.addEventListener("click", (e) => {
//         e.preventDefault()
//         daysField.value = Number(minutesField.value / 24 / 60);
//         hoursField.value = Number(minutesField.value / 60);
//         secondsField.value = Number(minutesField.value * 60);
//     });
//
//     secondsButton.addEventListener("click", (e) => {
//         e.preventDefault()
//         daysField.value = Number(secondsField.value / 60 / 60 / 24);
//         hoursField.value = Number(secondsField.value / 60 / 60);
//         minutesField.value = Number(secondsField.value / 60);
//     });
// }
