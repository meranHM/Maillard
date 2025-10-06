import Container from "../ui/Container"
import Image from "next/image"
import { Badge } from "../ui/Badge"
import InfoCircleIcon from "../icons/InfoCircleIcon"

const ProductAfterTaste = () => {
  return (
    <Container
        className="relative h-[500px] bg-gradient-to-b from-[#FAFAFA] to-[#F0F0F0]"
    >
        {/* Underlay */}
        <div
            className="absolute inset-0 z-0 pointer-events-none"
        >
            <Image
                className="object-cover object-[calc(100%-140px)_center]"
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
                className="text-title-lg text-black text-start"
            >
                طعم یاد‌ها
            </h3>

            <div
                className="flex flex-col gap-2"
            >
                <p
                    className="text-label-lg text-start pb-4"
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
                <p
                    className="text-label-md text-gray-600 text-nowrap flex items-center gap-2 mt-8"
                >
                    <InfoCircleIcon className="w-6 h-6" />
                    درباره طعم یادها بیشتر بدانید
                </p>
            </div>
        </div>
    </Container>
  )
}

export default ProductAfterTaste