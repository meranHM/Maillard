export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar?: string
  }
  publishedAt: string
  updatedAt?: string
  thumbnail: string
  featuredImage1: string
  featuredImage2: string
  category: string
  tags: string[]
  readTime: number // in minutes
  views?: number
}

export interface BlogListResponse {
  posts: BlogPost[]
  total: number
  page: number
  limit: number
}

export interface BlogFilters {
  page?: number
  limit?: number
  category?: string
  tag?: string
  search?: string
}