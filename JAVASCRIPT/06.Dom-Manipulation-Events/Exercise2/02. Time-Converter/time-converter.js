document.addEventListener('DOMContentLoaded', solve)

function solve() {
    const daysField = document.getElementById("days-input");
    const daysButton = document.getElementById("daysBtn");
    const hoursField = document.getElementById("hours-input");
    const hoursButton = document.getElementById("hoursBtn");
    const minutesField = document.getElementById("minutes-input");
    const minutesButton = document.getElementById("minutesBtn");
    const secondsField = document.getElementById("seconds-input");
    const secondsButton = document.getElementById("secondsBtn");

    daysButton.addEventListener("click", (e) => {
        e.preventDefault()
        hoursField.value = Number(daysField.value * 24);
        minutesField.value = Number(daysField.value * 24 * 60);
        secondsField.value = Number(daysField.value * 24 * 60 * 60);
    });

    hoursButton.addEventListener("click", (e) => {
        e.preventDefault()
        daysField.value = Number(hoursField.value / 24);
        minutesField.value = Number(hoursField.value * 60);
        secondsField.value = Number(hoursField.value * 60 * 60);
    });

    minutesButton.addEventListener("click", (e) => {
        e.preventDefault()
        daysField.value = Number(minutesField.value / 24 / 60);
        hoursField.value = Number(minutesField.value / 60);
        secondsField.value = Number(minutesField.value * 60);
    });

    secondsButton.addEventListener("click", (e) => {
        e.preventDefault()
        daysField.value = Number(secondsField.value / 60 / 60 / 24);
        hoursField.value = Number(secondsField.value / 60 / 60);
        minutesField.value = Number(secondsField.value / 60);
    });
}