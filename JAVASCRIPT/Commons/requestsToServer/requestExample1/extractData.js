const puppeteer = require('puppeteer');

(async () => {
    // Launch Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Open the target website
    await page.goto('https://books.toscrape.com/', { waitUntil: 'load', timeout: 60000 });

    // Extract text from the first book title
    const bookTitle = await page.evaluate(() => {
        const element = document.querySelector('.product_pod h3 a');
        return element ? element.getAttribute('title') : 'Book not found';
    });

    console.log('First Book Title:', bookTitle);

    // Close the browser
    await browser.close();
})();
