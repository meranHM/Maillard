import { BlogListResponse } from "@/types/blog"
import BlogCard from "./BlogCard"

interface BlogGridProps {
    blogs: BlogListResponse
}

const BlogGrid: React.FC<BlogGridProps> = ({ blogs }) => {
  return (
    <div
        className="w-full grid grid-cols-3 gap-x-4.5 gap-y-9"
    >
        {blogs.posts.slice(0, -1).map((post) => (
            <BlogCard
                post={post}
                key={post.id}
            />
        ))}
    </div>
  )
}

export default BlogGrid