import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://unfounded.in'
  
  // Static routes
  const staticRoutes = [
    '',
    '/blog',
    '/zachies',
    '/drinkq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Blog posts
  const blogPosts = [
    '/blog/unfounded-manifesto',
    '/blog/venture-lab-in-chennai',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogPosts]
}
