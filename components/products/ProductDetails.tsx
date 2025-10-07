import { HeartIcon } from "lucide-react"
import { CartIcon } from "../icons/CartIcon"
import ChevronDownIcon from "../icons/ChevronDownIcon"
import DeliveryTruckIcon from "../icons/DeliveryTruckIcon"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"
import ProductCarousel from "./ProductCarousel"

export interface ProductDetailsProps {
  id: string
  name: string
  description: string
  flavorNotes: string
  features: string[]
  price: number
  originalPrice?: number // optional, in case some products don't have discounts
  images: string[]
  sizes: {
    label: string
    value: string
  }[]
  specifications: {
    type: string
    origin: string
    roastLevel: string
    acidity: string
    bitterness: string
    flavorProfile: string
  }
  grindOptions: string[]
  category: string
  inStock: boolean
}


const ProductDetails: React.FC<ProductDetailsProps> = ({
    id,
    name,
    description,
    flavorNotes,
    features,
    sizes,
    images,
    specifications,
    price,
    grindOptions,
    inStock
}) => {
  return (
    <div
        className="w-full flex flex-col gap-6"
    >
        <div
            className="flex flex-col md:flex-row gap-15"
        >
            <div
                className="md:w-5/9 md:flex-shrink-0"
            >
                <ProductCarousel 
                    images={images}
                />
            </div>

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
                        className="text-title-lg lg:text-4xl text-black text-right"
                    >
                        {name}
                    </h3>
                    <p
                        className="text-title-sm text-gray-400a text-right leading-relaxed max-w-80 text-pretty"
                    >
                        {description}
                    </p>
                </div>

                {/* Flavor */}
                <div
                    className="flex justify-between border-y border-gray-900a text-label-sm md:text-label-md text-gray-900a pt-1 pb-3"
                >
                    <h5
                        className="w-2/5 flex-shrink-0"
                    >
                        عطر‌و‌طعم
                    </h5>
                    <p
                        className="flex-1"
                    >
                        {flavorNotes}
                    </p>
                </div>

                {/* Features */}
                <div
                    className="flex justify-between text-label-sm md:text-label-md text-gray-900a pt-1 pb-3"
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
                    className="w-full flex flex-nowrap items-center md:justify-between gap-1.5 mt-16"
                >
                    <button
                        className="flex items-center justify-between rounded-5xl transition-colors text-nowrap w-full max-w-40 py-2 md:py-4 px-2 md:px-6 text-label-lg border-none bg-gray-50 text-black backdrop-blur-sm"
                    >
                        وزن 250 گرم
                        <ChevronDownIcon className="w-6 h-6" />
                    </button>
                    <button
                        className="flex items-center justify-between px- rounded-5xl transition-colors text-nowrap w-full max-w-40 py-2 md:py-4 px-2 md:px-6 text-label-lg border-none bg-gray-50 text-black backdrop-blur-sm"
                    >
                        نوع آسیاب
                        <ChevronDownIcon className="w-6 h-6" />
                    </button>
                    <button
                        className="flex items-center justify-between rounded-5xl transition-colors text-nowrap w-full max-w-40 py-2 md:py-4 px-2 md:px-6 text-label-lg border-none bg-gray-50 text-black backdrop-blur-sm"
                    >
                        {price}
                        <span>تومان</span>
                    </button>
                </div>

                <hr className="w-full border-t border-gray-900a my-2"/>

                {/* CTA Buttons */}
                <div
                    className="flex items-center gap-3"
                >
                    {/* Mobile View */}
                    <Button
                        className="w-full justify-between md:hidden"
                        variant="fill"
                    >
                        اضافه به سبد خرید
                        <CartIcon className="text-gray-150 w-6 h-6"/>
                    </Button>
                    <Button
                        className="md:hidden"
                        variant="outline"
                    >
                    + &nbsp 1 &nbsp -
                    </Button>
                    {/* Desktop View */}
                    <Button
                        className="w-full justify-between hidden md:flex"
                        variant="outline"
                        size="lg"
                    >
                        اضافه به سبد خرید
                        <CartIcon className="text-black w-6 h-6"/>
                    </Button>
                    <Button
                        className="hidden md:block"
                        variant="outline"
                        size="lg"
                    >
                    + &nbsp 1 &nbsp -
                    </Button>
                </div>

                {/* Delivery Reminder */}
                <p
                    className="text-gray-400a text-[0.675rem] text-nowrap flex items-center gap-2 mt-1"
                >
                    <DeliveryTruckIcon className="w-4.5 h-4.5" />
                    ارسال رایگان برای سفارش‌های بالای ۳۰۰ هزار تومان
                </p>

                {/* Specifications Grid Mobile view */}
                <div
                    className="md:hidden grid grid-cols-2 grid-rows-4 gap-2 my-18"
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
                            {specifications.type}
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
                            {specifications.type}
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
                            {specifications.roastLevel}
                        </Badge>   
                    </div>
                </div>
            </article>
        </div>


        {/* Specifications Grid Desktop view */}
        <div
            className="hidden md:grid grid-cols-3 grid-rows-4 gap-2 my-18"
        >
            <div 
                className="bg-gray-50 flex items-center justify-between px-4 py-3"
            >
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

            <div className="col-span-2 bg-gray-50 flex items-center justify-between px-4 py-3">
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
                    خاستگاه
                </h5>
                <Badge
                    size="sm"
                    variant="outline"
                >
                    {specifications.origin}
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
                    تلخی
                </h5>
                <Badge
                    size="sm"
                    variant="outline"
                >
                    {specifications.bitterness}
                </Badge>                
            </div>

            <div /> {/* To skip a grid cell */}

            <div className="bg-gray-50 flex items-center justify-between px-4 py-3">
                <h5
                    className="text-title-sm text-black"
                >
                    درجه برشتگی
                </h5>
                <Badge
                    size="sm"
                    variant="outline"
                >
                    {specifications.roastLevel}
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
                    {specifications.type}
                </Badge>                
            </div>
        </div>  
    </div>
  )
}

export default ProductDetails