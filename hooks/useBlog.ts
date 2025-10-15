import { useQuery, useQueryClient } from "@tanstack/react-query"
import { blogApi } from "@/lib/api/blog"
import { BlogFilters } from "@/types/blog"

// Query keys factory for better organization
export const blogKeys = {
  all: ["blogs"] as const,
  lists: () => [...blogKeys.all, "list"] as const,
  list: (filters?: BlogFilters) => [...blogKeys.lists(), filters] as const,
  details: () => [...blogKeys.all, "detail"] as const,
  detail: (slug: string) => [...blogKeys.details(), slug] as const,
}

// Hook for fetching blog list
export function useBlogs(filters?: BlogFilters) {
  return useQuery({
    queryKey: blogKeys.list(filters),
    queryFn: () => blogApi.getBlogs(filters),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
  })
}

// Hook for fetching single blog post
export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: blogKeys.detail(slug),
    queryFn: () => blogApi.getBlogBySlug(slug),
    staleTime: 1000 * 60 * 10, // 10 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes
    retry: (failureCount, error) => {
      // Don"t retry on 404
      if (error instanceof Error && error.message === "Blog post not found") {
        return false
      }
      return failureCount < 3
    },
  })
}

// Hook for prefetching blog post (use on hover)
export function usePrefetchBlogPost() {
  const queryClient = useQueryClient()

  return (slug: string) => {
    queryClient.prefetchQuery({
      queryKey: blogKeys.detail(slug),
      queryFn: () => blogApi.getBlogBySlug(slug),
      staleTime: 1000 * 60 * 10,
    })
  }
}