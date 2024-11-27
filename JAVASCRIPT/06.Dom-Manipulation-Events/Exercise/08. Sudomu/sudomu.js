document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const formEl = document.querySelector("#solutionCheck");
    const outputEl = document.querySelector("#check");

    let status = "";
    let size = 3;

    formEl.addEventListener("submit", (e) => {
        e.preventDefault();

        const rows = e.target.querySelectorAll("table tbody tr");

        rows.forEach(row => {
            const values = [...row.children].map(el => el.children[0].value);
            const duplicates = values.filter((item, index) => values.indexOf(item) !== index);

            if (duplicates.length > 0) {
                status += "0";
            } else {
                status += "1";
            }
        });

        status += "x";

        for (let i = 1; i <= size; i++) {
            const column = [...e.target.querySelectorAll(`table tbody tr td:nth-child(${i}) input`)];
            const columnValues = column.map(input => input.value);
            const duplicates = columnValues.filter((item, index) => columnValues.indexOf(item) !== index);

            if (duplicates.length > 0) {
                status += "0";
            } else {
                status += "1";
            }
        }

        if (status === "111x111") {
            outputEl.classList.remove("fail");
            outputEl.classList.add("success");
            outputEl.textContent = "Success!";
        } else {
            outputEl.classList.add("fail");
            outputEl.classList.remove("success");
            outputEl.textContent = "Keep trying ...";
        }
    });

}
