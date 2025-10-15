import { BlogPost, BlogListResponse, BlogFilters } from "@/types/blog"

const API_BASE_URL = "/api" // Your Next.js API routes

// API Client Functions
export const blogApi = {
  // Get all blogs with filters
  getBlogs: async (filters?: BlogFilters): Promise<BlogListResponse> => {
    const params = new URLSearchParams()
    
    if (filters?.page) params.append("page", filters.page.toString())
    if (filters?.limit) params.append("limit", filters.limit.toString())
    if (filters?.category) params.append("category", filters.category)
    if (filters?.tag) params.append("tag", filters.tag)
    if (filters?.search) params.append("search", filters.search)

    const queryString = params.toString()
    const url = `${API_BASE_URL}/blogs${queryString ? `?${queryString}` : ""}`

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch blogs")
    }

    return response.json()
  },

  // Get single blog post by slug
  getBlogBySlug: async (slug: string): Promise<BlogPost> => {
    const response = await fetch(`${API_BASE_URL}/blogs/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Blog post not found")
      }
      throw new Error("Failed to fetch blog post")
    }

    return response.json()
  },
}