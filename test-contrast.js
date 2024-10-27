import puppeteer from 'puppeteer';
import { readFile } from 'fs/promises';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const axeSource = await readFile(require.resolve('axe-core/axe.min.js'), 'utf8');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8080'); // Ensure this URL is correct and the server is running

    // Inject axe-core
    await page.evaluate(axeSource);

    // Run axe-core
    const results = await page.evaluate(async () => {
        return await axe.run();
    });

    console.log(results.violations);

    await browser.close();
})();