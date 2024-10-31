function loadingBar(num) {
    let loading = "";
    if (num === 100) {
        loading = "[%%%%%%%%%%]";
        console.log("100% Complete!");
        console.log(loading);
    } else {
        loading = `[${"%".repeat(num / 10)}${".".repeat(10 - num / 10)}]`;
        console.log(`${num}% ${loading}`);
        console.log("Still loading...");
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
