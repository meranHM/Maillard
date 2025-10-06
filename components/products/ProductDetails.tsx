import { HeartIcon } from "lucide-react"
import { CartIcon } from "../icons/CartIcon"
import ChevronDownIcon from "../icons/ChevronDownIcon"
import DeliveryTruckIcon from "../icons/DeliveryTruckIcon"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"
import ProductCarousel from "./ProductCarousel"

interface ProductDetailsProps {
    id: string
    title: string
    description: string
    flavor: string
    features: string[]
    sizes: string[]
    images: string[]
    specifications: {
        type: string
        type2: string
        acidity: string
        "flavor profile": string
        type3: string
        "roast level": string
    }
    price: number
    grind: string[]
    inStock?: boolean
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
    id,
    title,
    description,
    flavor,
    features,
    sizes,
    images,
    specifications,
    price,
    grind,
    inStock
}) => {
  return (
    <div
        className="flex flex-col gap-6"
    >
        <ProductCarousel 
          images={images}
        />
        <article
            className="relative flex flex-col gap-2 flex-1 border-t border-gray-100"
        >
            {/* Favorite Button */}
            <Button
                className="absolute top-0 left-0"
                variant="text"
            >
                <HeartIcon className="w-6 h-6"/>
            </Button>

            {/* Title and Description */}
            <div
                className="flex flex-col gap-3 pt-2.5 pb-7"
            >
                <h3
                    className="text-title-lg text-black text-right"
                >
                    {title}
                </h3>
                <p
                    className="text-title-sm text-gray-400a text-right leading-relaxed max-w-80 text-pretty"
                >
                    {description}
                </p>
            </div>

            {/* Flavor */}
            <div
                className="flex justify-between border-y border-gray-900a text-label-sm text-gray-900a pt-1 pb-3"
            >
                <h5
                    className="w-2/5 flex-shrink-0"
                >
                    عطر‌و‌طعم
                </h5>
                <p
                    className="flex-1"
                >
                    {flavor}
                </p>
            </div>

            {/* Features */}
            <div
                className="flex justify-between text-label-sm text-gray-900a pt-1 pb-3"
            >
                <h5
                    className="w-2/5 flex-shrink-0"
                >
                    ویژگی
                </h5>
                <p
                    className="flex-1"
                >
                    {features.map((feat, index) => (
                        <span key={feat}>{feat}{index === features.length - 1 ? "." : "، "}</span>
                    ))}
                </p>
            </div>

            {/* Size - Grind - Price */}
            <div
                className="w-full flex flex-nowrap items-center gap-1.5 mt-16"
            >
                <Button
                    className="flex items-center gap-1"
                    variant="tonal"
                >
                    وزن 250 گرم
                    <ChevronDownIcon className="w-6 h-6"/>
                </Button>
                <Button
                    className="flex items-center"
                    variant="tonal"
                >
                    نوع آسیاب
                    <ChevronDownIcon className="w-6 h-6"/>
                </Button>
                <Badge
                    className="text-nowrap"
                    variant="tonal"
                >
                    {price} تومان
                </Badge>
            </div>

            <hr className="w-full border-t border-gray-900a my-2"/>

            {/* CTA Buttons */}
            <div
                className="flex items-center gap-3"
            >
                <Button
                    className="w-full flex items-center justify-between"
                    variant="fill"
                >
                    اضافه به سبد خرید
                    <CartIcon className="text-gray-150 w-6 h-6"/>
                </Button>
                <Button
                    className=""
                    variant="outline"
                >
                + &nbsp; 1 &nbsp; -
                </Button>
            </div>

            {/* Delivery Reminder */}
            <p
                className="text-gray-400a text-[0.675rem] text-nowrap flex items-center gap-2 mt-1"
            >
                <DeliveryTruckIcon className="w-4.5 h-4.5" />
                ارسال رایگان برای سفارش‌های بالای ۳۰۰ هزار تومان
            </p>

            {/* Specifications Grid */}
            <div
                className="grid grid-cols-2 grid-rows-4 gap-2 my-18"
            >
                <div className="bg-gray-50 flex items-center justify-between px-4 py-3">
                    <h5
                        className="text-title-sm text-black"
                    >
                        گونه
                    </h5>
                    <Badge
                        size="sm"
                        variant="outline"
                    >
                        {specifications.type}
                    </Badge>
                </div>

                <div className="bg-gray-50 flex items-center justify-between px-4 py-3">
                    <h5
                        className="text-title-sm text-black"
                    >
                        گونه
                    </h5>
                    <Badge
                        size="sm"
                        variant="outline"
                    >
                        {specifications.type2}
                    </Badge>                
                </div>

                <div className="bg-gray-50 flex items-center justify-between col-span-2 px-4 py-3">
                    <h5
                        className="text-title-sm text-black"
                    >
                        طعم یاد‌ها
                    </h5>
                    <Badge
                        size="sm"                
                        variant="outline"
                    >
                        {specifications.type}
                    </Badge>                
                </div>

                <div className="bg-gray-50 flex items-center justify-between px-4 py-3">
                    <h5
                        className="text-title-sm text-black"
                    >
                        اسیدیته
                    </h5>
                    <Badge
                        size="sm"                
                        variant="outline"
                    >
                        {specifications.acidity}
                    </Badge>                   
                </div>

                <div className="bg-gray-50 flex items-center justify-between px-4 py-3">
                    <h5
                        className="text-title-sm text-black"
                    >
                        گونه
                    </h5>
                    <Badge
                        size="sm"
                        variant="outline"
                    >
                        {specifications.type3}
                    </Badge>                
                </div>
                
                <div className="bg-gray-50 flex items-center justify-between col-span-2 px-4 py-3">
                    <h5
                        className="text-title-sm text-black"
                    >
                        درجه برشتگی
                    </h5>
                    <Badge
                        size="sm"
                        variant="outline"
                    >
                        {specifications["roast level"]}
                    </Badge>   
                </div>
            </div>
        </article>        
    </div>

  )
}

export default ProductDetails