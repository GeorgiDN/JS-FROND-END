function toggle() {
    const buttonEl = document.getElementsByClassName("button")[0];
    const extraEl = document.getElementById("extra");
    const isHidden = extraEl.style.display === "none";

    if (isHidden || !extraEl.style.display) {
        extraEl.style.display = "block";
        buttonEl.textContent = "Less";
    } else {
        extraEl.style.display = "none";
        buttonEl.textContent = "More";
    }
}
