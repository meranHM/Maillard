"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon"
import { BlogPost } from "@/types/blog"

interface BlogHeroCardProps {
  post: BlogPost
}

const BlogHeroCard: React.FC<BlogHeroCardProps> = ({ post }) => {
  return (
    <section
      className="relative w-full h-[519px] overflow-hidden bg-gray-50 flex flex-col md:flex-row gap-7.5 p-6 md:p-7.5"
    >
      {/* Image */}
       <div
        className="relative w-[40%] flex-shrink-0 overflow-hidden"
       >
        <Image 
          className="object-cover"
          src={post.thumbnail}
          alt={post.title}
          fill
        />
       </div>

      {/* Text */}
      <div
        className="h-full flex flex-col flex-1"
      >
        <div
          className="flex flex-col justify-between flex-1"
        >
          {/* Category and Date */}
          <div
            className="flex items-center gap-4"
          >
            <Badge
              variant="outline"
              size="sm"
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

          {/* Title, Excerpt and Read Button */}
          <div
            className="w-full max-w-[550px] flex flex-col gap-4"
          >
          <h2
            className="text-headline-sm leading-snug"
          >
            {post.title}
          </h2>
          <p
            className="text-label-md line-clamp-3 w-full max-w-md"
          >
            {post.excerpt}
          </p>
          <Link
            className="w-fit flex items-center rounded-5xl transition-colors text-nowrap border border-black bg-white text-black shadow-sm backdrop-blur-sm px-4 py-2 text-label-md"
            href={`/blog/${post.slug}`}
          >
            خواندن پست
            <ArrowLeftIcon className="w-6 h-6"/>
          </Link>
          </div>
        </div>
       </div>
    </section>
  )
}

export default BlogHeroCard