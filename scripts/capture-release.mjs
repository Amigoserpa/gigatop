import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { loadPlaywright } from '../../visual-critic/scripts/lib/playwright.mjs';

const url = process.env.PHASE4_URL || 'http://127.0.0.1:4314/';
const root = '/home/superagent/gigatop-creative-core/phase4';
const owner = path.join(root, 'owner-review');
const baselines = path.join(root, 'visual-baselines');
const scenes = [['#top','01-hero.png'],['#realitaet','02-business-reality.png'],['#produkt','03-product-proof.png'],['#private-ai','04-private-ai.png'],['#loesungen','05-solutions.png'],['#infrastruktur','06-infrastructure.png'],['#arbeitsweise','07-how-we-build.png'],['#kontakt','08-final-cta.png']];
fs.mkdirSync(owner, { recursive: true });
fs.mkdirSync(path.join(baselines, 'scenes'), { recursive: true });
const { chromium } = loadPlaywright();
const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });

async function open(viewport) {
  const page = await browser.newPage({ viewport });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < height; y += Math.max(500, viewport.height * 0.8)) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(30);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(250);
  return page;
}

try {
  const wide = await open({ width: 1920, height: 1080 });
  await wide.screenshot({ path: path.join(owner, 'homepage-desktop-wide-release.png'), fullPage: true });
  await wide.close();
  const desktop = await open({ width: 1440, height: 1000 });
  await desktop.screenshot({ path: path.join(owner, 'homepage-desktop-release.png'), fullPage: true });
  for (const [selector, filename] of scenes) {
    await desktop.locator(selector).screenshot({ path: path.join(owner, filename) });
    fs.copyFileSync(path.join(owner, filename), path.join(baselines, 'scenes', filename));
  }
  await desktop.close();
  const mobile = await open({ width: 390, height: 844 });
  await mobile.screenshot({ path: path.join(owner, 'homepage-mobile-release.png'), fullPage: true });
  await mobile.close();
  fs.copyFileSync(path.join(owner, 'homepage-desktop-wide-release.png'), path.join(baselines, 'homepage-desktop-wide-release.png'));
  fs.copyFileSync(path.join(owner, 'homepage-desktop-release.png'), path.join(baselines, 'homepage-desktop-release.png'));
  fs.copyFileSync(path.join(owner, 'homepage-mobile-release.png'), path.join(baselines, 'homepage-mobile-release.png'));
} finally {
  await browser.close();
}

const files = fs.readdirSync(baselines, { recursive: true }).filter((name) => name.endsWith('.png')).sort().map((name) => {
  const file = path.join(baselines, name);
  return { file: name, sha256: crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex') };
});
fs.writeFileSync(path.join(baselines, 'manifest.json'), `${JSON.stringify({ version: 2, route: '/', viewports: ['1920x1080', '1440x1000', '390x844'], reducedMotion: true, files }, null, 2)}\n`);
console.log(JSON.stringify({ owner, baselines, scenes: scenes.length }, null, 2));
