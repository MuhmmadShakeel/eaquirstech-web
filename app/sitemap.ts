import type { MetadataRoute } from 'next';
import { siteConfig as site } from '@/lib/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date().toISOString();
  return [
    { url: base, lastModified: now, priority: 1 },
    { url: `${base}/work`, lastModified: now, priority: 0.9 },
    { url: `${base}/services`, lastModified: now, priority: 0.9 },
    { url: `${base}/about`, lastModified: now, priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, priority: 0.8 },
  ];
}
