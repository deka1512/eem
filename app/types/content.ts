export interface NewsItem {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  image?: string
  imageAlt?: string
  scripture?: string
  readingTime?: string
  content?: string[]
}

export interface EventItem {
  slug: string
  title: string
  description: string
  date: string
  location?: string
  image?: string
  imageAlt?: string
}

export interface SermonPoint {
  title: string
  description: string
}

export interface SermonItem {
  slug: string
  title: string
  preacher?: string
  preachedAt?: string
  scripture?: string
  description?: string
  thumbnail?: string
  videoUrl?: string
  category?: string
  outline?: SermonPoint[]
  application?: string
  prayer?: string
}