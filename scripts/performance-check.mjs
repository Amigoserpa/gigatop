import fs from 'node:fs';
import path from 'node:path';
import { loadPlaywright } from '../../visual-critic/scripts/lib/playwright.mjs';

const url = process.env.PHASE4_URL || 'http://127.0.0.1:4314/';
const out = '/home/superagent/gigatop-creative-core/phase4/owner-review/PERFORMANCE_METRICS.json';
const { chromium } = loadPlaywright();
const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const profiles = [];
try {
  for (const [name, width, height] of [['desktop',1440,1000],['mobile',390,844]]) {
    const page = await browser.newPage({ viewport: { width, height } });
    await page.addInitScript(() => {
      window.__layoutShift = 0;
      new PerformanceObserver((list) => { for (const entry of list.getEntries()) if (!entry.hadRecentInput) window.__layoutShift += entry.value; }).observe({ type: 'layout-shift', buffered: true });
      window.__lcp = 0;
      new PerformanceObserver((list) => { const entries = list.getEntries(); window.__lcp = entries.at(-1)?.startTime || 0; }).observe({ type: 'largest-contentful-paint', buffered: true });
    });
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(500);
    const metrics = await page.evaluate(() => {
      const resources = performance.getEntriesByType('resource');
      const bytes = (kind) => resources.filter((entry) => kind === 'all' || entry.initiatorType === kind).reduce((sum, entry) => sum + (entry.transferSize || 0), 0);
      const paints = Object.fromEntries(performance.getEntriesByType('paint').map((entry) => [entry.name, Math.round(entry.startTime)]));
      return { requests: resources.length, transferBytes: bytes('all'), scriptBytes: bytes('script'), cssBytes: bytes('css'), imageBytes: bytes('img'), fontBytes: bytes('css') + bytes('font'), fcpMs: paints['first-contentful-paint'] || null, lcpMs: Math.round(window.__lcp || 0), cls: Number((window.__layoutShift || 0).toFixed(4)), domNodes: document.getElementsByTagName('*').length };
    });
    profiles.push({ name, viewport: `${width}x${height}`, ...metrics });
    await page.close();
  }
} finally { await browser.close(); }
const pass = profiles.every((p) => p.transferBytes < 1_500_000 && p.scriptBytes < 400_000 && p.cls < 0.1 && p.domNodes < 1000);
const report = { status: pass ? 'PASS' : 'FAIL', methodology: 'Local production build; unthrottled Chromium. Results are diagnostic, not a Lighthouse or field score.', profiles };
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (!pass) process.exitCode = 1;
