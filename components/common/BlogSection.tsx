import BlogCard from "./BlogCard"

const placeHolderBlogPosts = [
    { id: 0, imgSrc: "/images/blog-image-1.png", title: "فناوری جدید،‌تجربه‌ای آشنا" },
    { id: 1, imgSrc: "/images/blog-image-2.png", title: "فناوری جدید،‌تجربه‌ای آشنا" },
]

const BlogSection = () => {
  return (
    <section
        className="flex flex-col gap-4"
    >
        {placeHolderBlogPosts.map((blog) => (
            <BlogCard 
                imgSrc={blog.imgSrc}
                title={blog.title}
                key={blog.id}
            />
        ))}
    </section>
  )
}

export default BlogSection