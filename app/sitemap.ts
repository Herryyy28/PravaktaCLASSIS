import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pravaktaacademy.vercel.app';

  // Define all your static routes here
  const routes = [
    '',
    '/about',
    '/courses',
    '/faculty',
    '/franchise',
    '/gallery',
    '/faq',
    '/contact',
    '/privacy-policy',
    '/terms-conditions',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
