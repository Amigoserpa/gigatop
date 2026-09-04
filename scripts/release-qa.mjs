import fs from 'node:fs';
import path from 'node:path';
import { loadPlaywright } from '../../visual-critic/scripts/lib/playwright.mjs';

const url = process.env.PHASE4_URL || 'http://127.0.0.1:4314/';
const out = process.env.PHASE4_OWNER || '/home/superagent/gigatop-creative-core/phase4/owner-review';
const targets = [[1920,1080],[1440,1000],[1280,800],[1024,768],[768,1024],[430,932],[390,844],[375,812]];
const { chromium } = loadPlaywright();
const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const results = [];

try {
  for (const [width, height] of targets) {
    const page = await browser.newPage({ viewport: { width, height } });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await page.waitForTimeout(250);
    const metrics = await page.evaluate(() => {
      const controls = [...document.querySelectorAll('a, button')].filter((node) => {
        const style = getComputedStyle(node);
        const rect = node.getBoundingClientRect();
        return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
      });
      const technical = [...document.querySelectorAll('small, .scene-index, .eyebrow, [class*="label"], [class*="state"]')].filter((node) => {
        const style = getComputedStyle(node);
        const rect = node.getBoundingClientRect();
        return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 1 && rect.height > 1;
      });
      const fontSizes = technical.map((node) => Number.parseFloat(getComputedStyle(node).fontSize));
      return {
        sections: document.querySelectorAll('main > section.scene').length,
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        touchFailures: controls.filter((node) => { const r = node.getBoundingClientRect(); return r.width < 44 || r.height < 44; }).map((node) => node.textContent?.trim().slice(0, 60)),
        minTechnicalFontPx: Math.min(...fontSizes),
        unreadableTechnicalLabels: technical.filter((node) => Number.parseFloat(getComputedStyle(node).fontSize) < 10).map((node) => node.textContent?.trim().slice(0, 60)),
        imagesLoaded: [...document.images].every((image) => image.complete && image.naturalWidth > 0),
        h1: document.querySelectorAll('h1').length,
        h2: document.querySelectorAll('h2').length,
        germanSharpS: document.body.innerText.includes('ß'),
        cta: document.querySelector('.final-action')?.getAttribute('href'),
        infrastructureReference: document.querySelector('.hardware-figure figcaption')?.textContent?.trim(),
        memoryClaims: [...document.querySelectorAll('.infrastructure')].map((node) => node.textContent ?? '').join(' '),
      };
    });
    let mobileMenu = true;
    if (width <= 820) {
      await page.locator('.menu-toggle').click();
      mobileMenu = await page.locator('#primary-navigation').evaluate((node) => getComputedStyle(node).display !== 'none');
      await page.keyboard.press('Escape');
      mobileMenu &&= await page.locator('#primary-navigation').evaluate((node) => getComputedStyle(node).display === 'none');
    }
    results.push({ viewport: `${width}x${height}`, httpStatus: response?.status(), mobileMenu, ...metrics });
    await page.close();
  }

  const interaction = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await interaction.goto(url, { waitUntil: 'networkidle' });
  const before = await interaction.locator('.human-gate').getAttribute('aria-label');
  await interaction.locator('.human-gate').click();
  const after = await interaction.locator('.human-gate').getAttribute('aria-label');
  const live = await interaction.locator('[role="status"]').textContent();
  await interaction.close();

  const notFound = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const missingResponse = await notFound.goto(new URL('/this-route-does-not-exist', url).href, { waitUntil: 'networkidle' });
  const missingHeading = await notFound.locator('h1').textContent();
  await notFound.close();

  const compare = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const compareResponse = await compare.goto(new URL('/v3/compare', url).href, { waitUntil: 'networkidle' });
  await compare.close();

  const reviewRoute = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const reviewResponse = await reviewRoute.goto(new URL('/v3', url).href, { waitUntil: 'networkidle' });
  await reviewRoute.close();

  const pass = results.every((item) => item.httpStatus === 200 && item.sections === 8 && item.overflow === 0 && item.touchFailures.length === 0 && item.unreadableTechnicalLabels.length === 0 && item.imagesLoaded && item.h1 === 1 && item.h2 === 7 && !item.germanSharpS && item.mobileMenu && item.cta === 'mailto:top@gigatop.io?subject=AI-Potenzial%20klären' && item.infrastructureReference === 'TECHNISCHE REFERENZ · KEIN PRODUKTBILD' && item.memoryClaims.includes('128 GB') && !item.memoryClaims.includes('121 GiB'))
    && before === 'Meeting vorbereiten – Freigabe erforderlich'
    && after === 'Autorisiert – Meeting wird vorbereitet'
    && live === 'Autorisiert – Meeting wird vorbereitet'
    && missingResponse?.status() === 404
    && missingHeading?.includes('existiert nicht')
    && reviewResponse?.status() === 404
    && compareResponse?.status() === 404;
  const report = { status: pass ? 'PASS' : 'FAIL', results, humanGate: { before, after, live }, routes: { notFound: missingResponse?.status(), review: reviewResponse?.status(), compare: compareResponse?.status() } };
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(out, 'RESPONSIVE_QA.json'), `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify(report, null, 2));
  if (!pass) process.exitCode = 1;
} finally {
  await browser.close();
}
