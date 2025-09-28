import Card from "./Card"
import { Button } from "../ui/Button"
import Image from "next/image"

interface ProductCardProps {
    imgSrc: string
    title: string
    price: string
    onClick?: () => void
    onSeeProduct?: () => void
}


const ProductCard: React.FC<ProductCardProps> = ({ 
    imgSrc, 
    title, 
    price, 
    onClick, 
    onSeeProduct 
}) => {
  return (
    <Card
        onClick={onClick}
    >
        <div
            className="flex flex-col h-full space-y-4"
        >
            <div
                className="h-2/3 bg-[#FBFBFB]"
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
                className="flex flex-row justify-between items-center"
            >
                <h3
                    className="text-black text-label-md md:text-title-md line-clamp-2"
                >
                    {title}
                </h3>
                <p
                    className="flex items-center gap-1 text-center text-black text-body-sm sm:text-label-md md:text-title-md"
                >
                    {price} 
                    <span 
                        className="text-gray-400a text-label-sm md:text-title-sm"
                    >
                        تومان
                    </span>
                </p>
            </div>
            <div>
                <Button
                    className="w-full justify-between gap-1"
                    variant="outline"
                    size="sm"
                    onClick={onSeeProduct}
                >
                    مشاهده محصول
                    <Image
                        className="w-3 h-auto object-cover"
                        src="/icons/add-bold.svg"
                        alt="add icon"
                        width={12}
                        height={12}
                    />
                </Button>
            </div>
        </div>
    </Card>
  )
}

export default ProductCard