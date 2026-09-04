import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const forbidden = [
  'public/assets/dgx-exploded-view.png',
  'public/assets/dgx-front-angle-2.png',
];
const sourceFiles = ['app/v3/homepage-v3.tsx', 'app/globals.css', 'app/layout.tsx'];
const source = sourceFiles.map((file) => fs.readFileSync(path.join(root, file), 'utf8')).join('\n');
const publicImages = fs.readdirSync(path.join(root, 'public'), { recursive: true })
  .map(String)
  .filter((file) => /\.(?:png|jpe?g|webp|avif|gif)$/i.test(file));

const checks = {
  forbiddenAssetsAbsent: forbidden.every((file) => !fs.existsSync(path.join(root, file))),
  forbiddenAssetsUnreferenced: !/dgx-(?:exploded-view|front-angle-2)\.png/i.test(source),
  noRemoteRasterReferences: !/https?:\/\/[^'"\s]+\.(?:png|jpe?g|webp|avif|gif)/i.test(source),
  replacementLabelPresent: source.includes('TECHNISCHE REFERENZ · KEIN PRODUKTBILD'),
  memoryClaimUnambiguous: source.includes('128 GB Unified Memory') && !source.includes('121 GiB'),
  publicImages,
};

const pass = Object.entries(checks)
  .filter(([name]) => name !== 'publicImages')
  .every(([, value]) => value === true);

console.log(JSON.stringify({ status: pass ? 'PASS' : 'FAIL', checks }, null, 2));
if (!pass) process.exitCode = 1;
