function search() {
    const searchText  = document.getElementById("searchText").value.toLowerCase();
    const resultEl = document.getElementById("result");
    const towns = document.querySelectorAll("#towns li");
    let matches = [];

    towns.forEach((town) => {
        town.style.fontWeight = "normal";
        town.style.textDecoration = "none";
    });

    towns.forEach((town) => {
        if (searchText.length > 0 && town.textContent.toLowerCase().includes(searchText)) {
            town.style.fontWeight = "bold";
            town.style.textDecoration = "underline";
            matches.push(town.textContent);
        }
    })
    resultEl.textContent = `${matches.length} matches found`;
}
