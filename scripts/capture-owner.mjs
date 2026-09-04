import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { loadPlaywright } from '../../visual-critic/scripts/lib/playwright.mjs';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const owner = path.join(root, 'owner-review');
const baselines = path.join(root, 'visual-baselines');
const url = process.env.PHASE3B_URL || 'http://127.0.0.1:4313/v3';
const scenes = [
  ['#top', '01-hero.png'],
  ['#realitaet', '02-business-reality.png'],
  ['#produkt', '03-product-proof.png'],
  ['#private-ai', '04-private-ai.png'],
  ['#loesungen', '05-solutions.png'],
  ['#infrastruktur', '06-infrastructure.png'],
  ['#arbeitsweise', '07-how-we-build.png'],
  ['#kontakt', '08-final-cta.png'],
];

fs.mkdirSync(owner, { recursive: true });
fs.mkdirSync(path.join(baselines, 'scenes'), { recursive: true });
const { chromium } = loadPlaywright();
const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });

async function open(viewport, reducedMotion = 'reduce') {
  const page = await browser.newPage({ viewport });
  await page.emulateMedia({ reducedMotion });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(350);
  return page;
}

try {
  const desktop = await open({ width: 1440, height: 1000 });
  await desktop.screenshot({ path: path.join(owner, 'homepage-desktop-full.png'), fullPage: true });
  for (const [selector, filename] of scenes) {
    await desktop.locator(selector).screenshot({ path: path.join(owner, filename) });
    fs.copyFileSync(path.join(owner, filename), path.join(baselines, 'scenes', filename));
  }
  await desktop.locator('.human-gate').click();
  await desktop.waitForTimeout(300);
  await desktop.locator('#produkt').screenshot({ path: path.join(baselines, 'scenes', '03-product-proof-approved.png') });
  await desktop.close();

  const mobile = await open({ width: 390, height: 844 });
  await mobile.screenshot({ path: path.join(owner, 'homepage-mobile-full.png'), fullPage: true });
  await mobile.close();

  for (const [name, width, height] of [['1920x1080', 1920, 1080], ['1440x1000', 1440, 1000], ['768x1024', 768, 1024], ['390x844', 390, 844]]) {
    const page = await open({ width, height });
    await page.screenshot({ path: path.join(baselines, `homepage-${name}.png`), fullPage: true });
    await page.close();
  }
} finally {
  await browser.close();
}

const baselineFiles = fs.readdirSync(baselines, { recursive: true })
  .filter((name) => name.endsWith('.png'))
  .sort()
  .map((name) => {
    const file = path.join(baselines, name);
    return { file: name, sha256: crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex') };
  });
fs.writeFileSync(path.join(baselines, 'manifest.json'), `${JSON.stringify({ version: 1, route: '/v3', reducedMotion: true, files: baselineFiles }, null, 2)}\n`);

console.log(JSON.stringify({ owner, baselines, sceneCount: scenes.length }, null, 2));
