import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://unfounded.in'
  
  const coreRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/venture-studio-india', priority: 0.98, changeFrequency: 'weekly' as const },
    { route: '/student-founder-fellowship', priority: 0.98, changeFrequency: 'weekly' as const },
    { route: '/nights-and-weekends', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/fellowship', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/build-day', priority: 0.90, changeFrequency: 'weekly' as const },
    { route: '/startup-ecosystem-chennai', priority: 0.90, changeFrequency: 'weekly' as const },
    { route: '/ventures/ziggers', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/ventures/loopverse', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/friends', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/zachies', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/drinkq', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }))

  const blogPosts = [
    '/blog/venture-lab-in-chennai',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...coreRoutes, ...blogPosts]
}
