"use client"

import { useState } from "react"
import { useBlogs, usePrefetchBlogPost } from "@/hooks/useBlog"
import BlogHeroCard from "@/components/blog/BlogHeroCard"
import Container from "@/components/ui/Container"
import BlogGrid from "@/components/blog/BlogGrid"

const BlogPage = () => {
  const [page, setPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string>()
  const [searchQuery, setSearchQuery] = useState("")

  const { data, isLoading, error, isFetching } = useBlogs({
    page,
    limit: 9,
    category: selectedCategory,
    search: searchQuery,
  })

  const prefetchPost = usePrefetchBlogPost()

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-red-600">
          <h2 className="text-2xl font-bold mb-4">مشکل در بارگیری پست‌ها</h2>
          <p>{error.message}</p>
        </div>
      </div>
    )
  }

  const latestPost = data?.posts[data.posts.length - 1]

  return (
    <Container>
      {latestPost && (
        <BlogHeroCard 
          post={latestPost}
        />
      )}

      {data && (
        <BlogGrid 
          blogs={data}
        />
      )}

    </Container>
  )
}

export default BlogPage