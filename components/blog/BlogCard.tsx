"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "../ui/Badge"

interface BlogCardProps {
    post: {
        slug: string
        title: string
        thumbnail: string
        featuredImage1: string
        featuredImage2: string
        category: string
        author?: { name: string }
        publishedAt: string
    }
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link
        className="group overflow-hidden bg-white hover:shadow-sm transition-all duration-300 h-[480px] flex flex-col gap-4"
        href={`/blog/${post.slug}`}
    >
        <div
            className="relative w-full h-4/5 overflow-hidden"
        >
            <Image 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src={post.thumbnail}
                alt={post.title}
                fill            
            />
        </div>

        <div
            className="flex flex-col gap-4"
        >
            <h3
                className="text-title-lg"
            >
                {post.title}
            </h3>
            <div
                className="flex items-center gap-2"
            >
                <Badge
                    size="sm"
                    variant="tonal"
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
        </div>
    </Link>
  )
}

export default BlogCard