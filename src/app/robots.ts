import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web', 'ClaudeBot', 'OAI-SearchBot'],
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private'],
      },
    ],
    sitemap: 'https://unfounded.in/sitemap.xml',
  }
}
