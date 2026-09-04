import { mkdir, writeFile } from 'node:fs/promises';

const outputDirectory = new URL('../dist/client/', import.meta.url);

await mkdir(outputDirectory, { recursive: true });
await Promise.all([
  writeFile(new URL('CNAME', outputDirectory), 'gigatop.io\n'),
  writeFile(
    new URL('robots.txt', outputDirectory),
    'User-agent: *\nAllow: /\nDisallow: /v3\nDisallow: /v3/compare\nSitemap: https://gigatop.io/sitemap.xml\n',
  ),
  writeFile(
    new URL('sitemap.xml', outputDirectory),
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://gigatop.io/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url></urlset>\n',
  ),
]);

console.log('Prepared GitHub Pages metadata in dist/client/.');
