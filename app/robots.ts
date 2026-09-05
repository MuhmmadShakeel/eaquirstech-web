import type { MetadataRoute } from 'next';
import { siteConfig as site } from '@/lib/content/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
