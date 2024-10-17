function colorize() {
    const tableElement = document.querySelector('table');
    const tableRowElements = tableElement.querySelectorAll('tr');

    for (let i = 1; i < tableRowElements.length; i += 2) {
        tableRowElements[i].style.backgroundColor = 'teal';
    }
}
