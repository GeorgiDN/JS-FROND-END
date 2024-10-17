function sumTable() {
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tr');
    let sum = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        const input = rows[i].querySelector('input');
        const cost = parseFloat(input.value);
        sum += cost;

        document.getElementById('sum').textContent = sum.toFixed(2);
    }
}
