import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/v3', '/v3/compare'] },
    sitemap: 'https://gigatop.io/sitemap.xml',
  };
}
