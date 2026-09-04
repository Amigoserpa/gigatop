import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const dist = path.join(root, 'dist');
const wranglerState = path.join(dist, 'server', '.wrangler');

if (!wranglerState.startsWith(`${dist}${path.sep}`) || path.basename(wranglerState) !== '.wrangler') {
  throw new Error('Refusing to clean an unexpected path');
}

fs.rmSync(wranglerState, { recursive: true, force: true });

const forbidden = /(?:^|\/)(?:\.env(?:\..*)?|rights-hold)(?:\/|$)|\.(?:pem|key|sqlite|sqlite-shm|sqlite-wal)$/i;
const files = fs.existsSync(dist) ? fs.readdirSync(dist, { recursive: true }).map(String) : [];
const blocked = files.filter((file) => forbidden.test(file));

if (blocked.length) {
  console.error(JSON.stringify({ status: 'FAIL', blocked }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ status: 'PASS', removed: 'dist/server/.wrangler', blocked: [] }, null, 2));
