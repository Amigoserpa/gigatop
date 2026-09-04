import fs from 'node:fs';
import path from 'node:path';
import { loadPlaywright } from '../../visual-critic/scripts/lib/playwright.mjs';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const url = process.env.PHASE3B_URL || 'http://127.0.0.1:4313/v3';
const targets = [[1920,1080],[1440,1000],[768,1024],[390,844]];
const { chromium } = loadPlaywright();
const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const results = [];

try {
  for (const [width,height] of targets) {
    const page = await browser.newPage({ viewport: { width, height } });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(url, { waitUntil: 'networkidle' });
    const result = await page.evaluate(() => {
      const controls = [...document.querySelectorAll('a.action-link, button.human-gate, .solution-selector button, .menu-toggle')].filter((node) => getComputedStyle(node).display !== 'none');
      const targetFailures = controls.filter((node) => { const rect = node.getBoundingClientRect(); return rect.width < 44 || rect.height < 44; }).length;
      const heroAction = document.querySelector('.hero-copy .action-link')?.getBoundingClientRect();
      return {
        sections: document.querySelectorAll('main > section.scene').length,
        horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        touchTargetFailures: targetFailures,
        heroActionInViewport: Boolean(heroAction && heroAction.top >= 0 && heroAction.bottom <= innerHeight),
        imagesLoaded: [...document.images].every((image) => image.complete && image.naturalWidth > 0),
        h1Count: document.querySelectorAll('h1').length,
        h2Count: document.querySelectorAll('h2').length,
      };
    });
    if (width <= 820) {
      await page.locator('.menu-toggle').click();
      result.mobileMenuOpens = await page.locator('#primary-navigation').evaluate((node) => getComputedStyle(node).display !== 'none');
    }
    results.push({ viewport: `${width}x${height}`, ...result });
    await page.close();
  }
} finally {
  await browser.close();
}

const status = results.every((item) => item.sections === 8 && item.horizontalOverflow === 0 && item.touchTargetFailures === 0 && item.heroActionInViewport && item.imagesLoaded && item.h1Count === 1 && item.h2Count === 7 && item.mobileMenuOpens !== false) ? 'PASS' : 'FAIL';
const output = { status, results };
fs.writeFileSync(path.join(root, 'owner-review', 'RESPONSIVE_ACCESSIBILITY_CHECK.json'), `${JSON.stringify(output, null, 2)}\n`);
console.log(JSON.stringify(output, null, 2));
if (status !== 'PASS') process.exitCode = 1;
