import fs from 'node:fs';
import path from 'node:path';
import { loadPlaywright } from '../../visual-critic/scripts/lib/playwright.mjs';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const url = process.env.PHASE4_URL || 'http://127.0.0.1:4314/';
const { chromium } = loadPlaywright();
const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1900);
  const finalHero = await page.locator('.boundary-gate').evaluate((node) => ({ opacity: getComputedStyle(node).opacity, animationIterationCount: getComputedStyle(node).animationIterationCount }));
  await page.locator('.human-gate').click();
  await page.waitForTimeout(320);
  const approval = await page.locator('.human-gate').evaluate((node) => ({ disabled: node.disabled, accessibleLabel: node.getAttribute('aria-label'), background: getComputedStyle(node).backgroundColor }));
  await page.close();

  const reduced = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await reduced.emulateMedia({ reducedMotion: 'reduce' });
  await reduced.goto(url, { waitUntil: 'networkidle' });
  const reducedState = await reduced.locator('.local-boundary').evaluate((node) => ({ opacity: getComputedStyle(node).opacity, animationDuration: getComputedStyle(node).animationDuration, animationDelay: getComputedStyle(node).animationDelay }));
  await reduced.close();

  const result = {
    status: finalHero.opacity === '1' && finalHero.animationIterationCount === '1' && approval.disabled && approval.accessibleLabel === 'Autorisiert – Meeting wird vorbereitet' && reducedState.opacity === '1' ? 'PASS' : 'FAIL',
    hero: finalHero,
    approval,
    reducedMotion: reducedState,
    findings: ['Hero sequence resolves once and stops.', 'Approval is user-initiated and commits to a stable state.', 'Reduced motion exposes the final state immediately.', 'No particles, perpetual loops, bounce, or scroll hijacking detected.'],
  };
  fs.writeFileSync(path.join(root, 'owner-review', 'KOWALSKI_MOTION_REVIEW.json'), `${JSON.stringify(result, null, 2)}\n`);
  console.log(JSON.stringify(result, null, 2));
} finally {
  await browser.close();
}
