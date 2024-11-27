document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const profiles = document.querySelectorAll(".profile");

    profiles.forEach(profile => {
        const lockRadio = profile.querySelector("input[type='radio'][id*='Lock']");
        const unlockRadio = profile.querySelector("input[type='radio'][id*='Unlock']");
        const showButton = profile.querySelector("button");
        const hiddenField = profile.querySelector(".hidden-fields");

        showButton.addEventListener("click", () => {
            if (unlockRadio.checked) {
                if (hiddenField.style.display === "block") {
                    hiddenField.style.display = "none";
                    showButton.textContent = "Show more";
                } else {
                    hiddenField.style.display = "block";
                    showButton.textContent = "Hide it";
                }
            }
        });
    });
}
