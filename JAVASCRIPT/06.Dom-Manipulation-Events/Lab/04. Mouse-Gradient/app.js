function attachGradientEvents() {
    const resulEl = document.getElementById("result");
    const gradientEl = document.getElementById("gradient");

    gradientEl.addEventListener("mousemove", (e) => {
        const currentPosition = e.offsetX;
        const elementWidth = e.currentTarget.clientWidth;
        let percent = (currentPosition / elementWidth * 100);

        if (percent > 99.5) {
            percent = 100;
        } else {
            percent = Math.floor(percent)
        }
        resulEl.textContent = `${percent}%`;
    });
}
