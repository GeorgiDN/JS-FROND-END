function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const tableRowEls = document.querySelectorAll("table.container tbody tr");
        const searchedText = document.getElementById("searchField").value.toLowerCase();

        tableRowEls.forEach((row) => {
            row.classList.remove("select");
        });

        tableRowEls.forEach((row) => {
            if (searchedText.length > 0 && row.textContent.toLowerCase().includes(searchedText)) {
                row.classList.add("select");
            }
        });
        document.getElementById("searchField").value = "";
    }
}
