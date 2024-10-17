function extract(content) {
    const contentElement = document.getElementById(content);
    const pattern = /\(([^()]+)\)/g;
    const matches = contentElement.textContent.matchAll(pattern);
    const result = Array.from(matches).map(match => match[1]).join('; ');
    document.getElementById('output').textContent = result; // Display the result in the <p> element
}
