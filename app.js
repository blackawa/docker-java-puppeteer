const puppeteer = require('puppeteer');

(async () => {
    const pdfPath = process.argv[2]
    const htmlString = process.argv[3]
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setContent(htmlString);
    await page.pdf({
        path: pdfPath,
        format: 'A4',
    })

    await browser.close()
})();
