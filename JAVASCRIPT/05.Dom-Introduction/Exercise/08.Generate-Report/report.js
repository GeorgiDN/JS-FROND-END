function generateReport() {
    const checkboxes = document.querySelectorAll("th input[type='checkbox']");
    const rowsEl = document.querySelectorAll("tbody tr");
    let textAreaEl = document.getElementById("output");
    let result = [];
    let selectedColumns = [];

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            selectedColumns.push({
                name: checkbox.name,
                index: index
            });
        }
    });

    rowsEl.forEach((row) => {
        let rowObject = {};
        selectedColumns.forEach((column) => {
            rowObject[column.name] = row.cells[column.index].textContent.trim();
        });
        result.push(rowObject);
    });
    textAreaEl.value = JSON.stringify(result, null, 2);
}
