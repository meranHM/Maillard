import Image from "next/image"
import { Button } from "../ui/Button"


interface BlogCardProps {
    title: string
    imgSrc: string
    onClick?: () => void
}


const BlogCard: React.FC<BlogCardProps> = ({ title, imgSrc, onClick }) => {
  return (
    <article
        className="relative w-[368px] h-[359px]"
    >
        {/* Underlay */}
        <div
            className="absolute inset-0"
        >
            <Image
                className="size-full object-cover"
                src={imgSrc}
                alt={`Image about ${title}`}
                fill
            />
        </div>

        {/* Overlay */}
        <div
            className="w-full absolute bottom-0 right-0 left-0 bg-white/60 backdrop-blur-[18px] flex flex-col items-center justify-center gap-3 py-4"
        >
            <h4
                className="text-label-md text-black text-center text-nowrap line-clamp-1"
            >
                {title}
            </h4>
            <Button
                variant="outline"
                size="sm"
            >
                بیشتر بدانید
            </Button>
        </div>
    </article>
  )
}

export default BlogCard