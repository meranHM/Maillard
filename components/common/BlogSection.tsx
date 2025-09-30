import BlogCard from "./BlogCard"

const placeHolderBlogPosts = [
    { id: 0, imgSrc: "/images/blog-image-1.png", title: "فناوری جدید،‌تجربه‌ای آشنا" },
    { id: 1, imgSrc: "/images/blog-image-2.png", title: "فناوری جدید،‌تجربه‌ای آشنا" },
]

const BlogSection = () => {
  return (
    <section
        className="widthLimit flex flex-col md:flex-row md:justify-between gap-4 mt-18 md:mt-22 lg:mt-32"
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