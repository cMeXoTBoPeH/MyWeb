import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://cMeXoTBoPeH.github.io/MyWeb'
  return [
    { url: `${base}/en`, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/en/services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/en/work`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/en/about`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/en/contact`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/bg`, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/bg/services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bg/work`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bg/about`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/bg/contact`, changeFrequency: 'monthly', priority: 0.6 },
  ]
}

