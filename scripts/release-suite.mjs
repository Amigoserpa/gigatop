import { execFileSync, spawn } from 'node:child_process';

const root = new URL('..', import.meta.url).pathname;
const origin = 'http://127.0.0.1:4314/';
const run = (command, args) => execFileSync(command, args, { cwd: root, stdio: 'inherit', env: { ...process.env, PHASE4_URL: origin } });

run('npm', ['run', 'release:asset-rights']);
run('npm', ['run', 'lint']);
run('npm', ['run', 'build']);

const server = spawn('npm', ['start', '--', '--port', '4314'], { cwd: root, stdio: 'inherit', detached: true });

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Production server did not become ready at ${origin}`);
}

try {
  await waitForServer();
  run('node', ['scripts/release-qa.mjs']);
  run('node', ['scripts/performance-check.mjs']);
  run('node', ['scripts/motion-check.mjs']);
} finally {
  if (server.pid) {
    try { process.kill(-server.pid, 'SIGTERM'); } catch {}
  }
  if (server.exitCode === null && server.signalCode === null) {
    await new Promise((resolve) => server.once('exit', resolve));
  }
  run('node', ['scripts/sanitize-build.mjs']);
}
