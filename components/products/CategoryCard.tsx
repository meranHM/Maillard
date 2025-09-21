import Card from "./Card"
import Image from "next/image"


interface CategoryCardProps {
    imgSrc: string
    title: string
    description: string
    onClick?: () => void
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    imgSrc,
    title,
    description,
    onClick,
}) => {
    return (
        <Card
            onClick={onClick}
        >
            <div
                className="flex flex-col h-full"
            >
                <div
                    className="bg-[#FBFBFB]"
                >
                    <Image
                        className="w-full h-full object-cover"
                        src={imgSrc}
                        alt={title}
                        width={352}
                        height={352}
                    />
                </div>

                <div
                    className="flex flex-col p-4 gap-2"
                >
                    <h3
                        className="text-black text-right font-semibold text-body-sm sm:text-label-md md:text-title-md lg:text-title-lg line-clamp-2"
                    >
                        {title}
                    </h3>
                    <p
                        className="text-label-sm text-right text-gray-500a line-clamp-4"
                    >
                        {description}
                    </p>
                </div>
            </div>
        </Card>
    )
}

export default CategoryCard