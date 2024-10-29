function sumTable() {
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tr');
    let sum = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        const cells = rows[i].querySelectorAll('td');
        const cost = parseFloat(cells[cells.length - 1].textContent);
        sum += cost;
    }

    document.getElementById('sum').textContent = sum.toFixed(2);
}

