const puppeteer = require('puppeteer');

(async () => {
    const pdfPath = process.argv[2]
    const htmlFilePath = process.argv[3]
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto('file://' + htmlFilePath, {waitUntil: 'networkidle0'});
    await page.evaluateHandle('document.fonts.ready');
    await page.pdf({
        path: pdfPath,
        format: 'A4',
    })

    await browser.close()
})();
