function lockedProfile() {
    const profiles = document.querySelectorAll(".profile")

    profiles.forEach(profile => {
        const unLockedButton = profile.querySelector("input[value='unlock']");
        const showMoreButton = profile.querySelector("button");
        const hiddenField = profile.querySelector("div[id$='HiddenFields']");

        showMoreButton.addEventListener("click", () => {
            if (unLockedButton.checked) {
                if (hiddenField.style.display === "block") {
                    hiddenField.style.display = "none";
                    showMoreButton.textContent = "Show more";
                } else {
                    hiddenField.style.display = "block";
                    showMoreButton.textContent = "Hide it";
                }
            }
        })
    })
}

