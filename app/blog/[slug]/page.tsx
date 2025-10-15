"use client"

import { use } from "react"
import { useBlogPost, useBlogs } from "@/hooks/useBlog"
import Image from "next/image"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Badge } from "@/components/ui/Badge"
import BlogCard from "@/components/blog/BlogCard"
import Link from "next/link"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params)
  const { data: post, isLoading, error } = useBlogPost(slug)
  const { data: allPosts } = useBlogs() // Fetching all posts for related posts section

  if (error) {
    if (error.message === "Blog post not found") {
      notFound()
    }
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-red-600">
          <h2 className="text-2xl font-bold mb-4">Error Loading Post</h2>
          <p>{error.message}</p>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded mb-4 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded mb-8 w-1/2"></div>
          <div className="h-64 bg-gray-300 rounded mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!post) return null

  /* Getting related posts (same category, excluding current post and limitting to 3) */
  const relatedPosts = allPosts?.posts
    ?.filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3) || []

  return (
    <>
      <article
        className="widthLimit px-4 py-10"
        dir="rtl" 
      >
        {/* Header */}
        <header 
          className="w-full max-w-[780px] mx-auto flex flex-col items-center justify-center gap-6 mb-19"
        >
          <div
            className="flex items-center justify-center gap-4 mb-1"
          >
            <Badge
              size="sm"
              variant="outline"
            >
              {post.category}
            </Badge>
            <time
              className="text-label-sm text-gray-600a"
              dateTime={post.publishedAt}
            >
              {new Date(post.publishedAt).toLocaleDateString("fa-IR", {
                month: "long",
                day: "numeric",
                weekday: "short"
              })}
            </time>
          </div>
          
          <h1 
            className="text-headline-md text-center"
          >
            قهوه، قصه‌ای که در هر فنجان تکرار نمی‌شود
          </h1>
          <p
            className="text-label-lg text-center"
          >
            مایارد تنها یک برند قهوه نیست، بلکه سفری به دنیای طعم‌های خاص و کیفیت بی‌نظیر است. ما با بهره‌گیری از بهترین دانه‌های قهوه و روش‌های روستینگ حرفه‌ای، محصولاتی خلق می‌کنیم که هر جرعه از آن شما را به دنیای هنر دم‌آوری می‌برد.
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative h-[588px] mb-12 overflow-hidden">
          <Image
            src={post.featuredImage1}
            alt={`تصویر شاخص: ${post.title}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg w-full max-w-2xl mx-auto mb-12"
          dir="rtl"
        >
          <h2
            className="text-title-lg mb-10"
          >
            {post.title}
          </h2>
          <p
            className="text-title-md"
          >
            {post.excerpt}
          </p>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
          >
            {post.content.replace(/^\s+/gm, '')}
          </ReactMarkdown>
        </div>
        <div className="relative h-[588px] mb-12 overflow-hidden">
          <Image
            src={post.featuredImage2}
            alt={`تصویر دوم: ${post.title}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
        <div 
          className="prose prose-lg w-full max-w-2xl mx-auto mb-12"
          dir="rtl"
        >
          <h2
            className="text-title-lg mb-10"
          >
            {post.title}
          </h2>
          <p
            className="text-title-md"
          >
            {post.excerpt}
          </p>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
          >
            {post.content.replace(/^\s+/gm, '')}
          </ReactMarkdown>
        </div>
      </article>
      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section 
          className="widthLimit px-4 py-16" dir="rtl"
        >
          <hr className="mb-12 border-black" />
          
          <div className="max-w-7xl mx-auto">
            <h2 
              className="md:text-title-lg lg:text-headline-sm mb-8 text-start"
            >
              مقالات بیشتر
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>

            {/* If less than 3 related posts, optionally show a link to all posts */}
            {relatedPosts.length < 3 && (
              <div className="text-center mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  مشاهده همه مقالات
                  <svg
                    className="w-4 h-4 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  )
}