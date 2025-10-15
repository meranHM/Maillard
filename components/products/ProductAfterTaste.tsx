import Image from "next/image"
import { Badge } from "../ui/Badge"
import InfoCircleIcon from "../icons/InfoCircleIcon"
import Link from "next/link"

const ProductAfterTaste = () => {
  return (
    <div
        className="relative h-[500px] bg-gradient-to-b from-[#FAFAFA] to-[#F0F0F0]"
    >
        {/* Underlay */}
        <div
            className="absolute inset-0 z-0 pointer-events-none"
        >
            <Image
                className="object-contain object-[calc(100%-600px)_center]"
                src="/images/motto-section-image.png"
                alt="Background image"
                fill
            />
        </div>

        {/* Overlay */}
        <div
            className="absolute inset-0 h-full z-10 flex flex-col items-start justify-between pr-7 pt-11 pb-7"
        >
            <h3
                className="text-title-lg md:text-headline-sm text-black text-start"
            >
                طعم یاد‌ها
            </h3>

            <div
                className="flex flex-col gap-2"
            >
                <p
                    className="text-label-lg md:text-title-md text-start pb-4"
                >
                    طعم ملایم و متعادل با نت‌های شکلات و مرکبات<br />
                    گزینه ای مناسب برای شروع روز با انرژی
                </p>
                <div
                    className="flex items-center gap-1.75"
                >
                    <Badge
                        className="bg-[#F47EDB]"
                        variant="text"
                    >
                        میوه ای
                    </Badge>
                    <Badge
                        className="bg-[#BDA58E]"
                        variant="text"
                    >
                        کاراملی
                    </Badge>
                    <Badge
                        className="bg-[#F4E47E]"
                        variant="text"
                    >
                        آجیلی
                    </Badge>
                </div>
                <Link
                    className="text-label-md md:text-title-sm text-gray-600 hover:text-gray-800a transition-colors text-nowrap flex items-center gap-2 mt-8"
                    href="/"
                >
                    <InfoCircleIcon className="w-6 h-6" />
                    درباره طعم یادها بیشتر بدانید
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProductAfterTaste