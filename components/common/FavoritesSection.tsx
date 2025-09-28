"use client"

import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import CategoryCard from "../products/CategoryCard"

const placeholderProducts = [
    { id: 0, imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
    { id: 1, imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
    { id: 2, imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
    { id: 3, imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
    { id: 4, imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
    { id: 5, imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
]


const FavoritesSection = () => {
    const [thumbWidth, setThumbWidth] = useState(0)
    const [thumbPos, setThumbPos] = useState(0)

    const scrollRef = useRef<HTMLDivElement>(null)

    /* updateing thumb size and position */
    const updateThumb = () => {
        if (!scrollRef.current) return
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current

        /* thumb width proportional to visible area */
        const width = (clientWidth / scrollWidth) * clientWidth
        setThumbWidth(width)

        /* thumb position proportional to scroll */
        const pos = (scrollLeft / (scrollWidth - clientWidth)) * (clientWidth - width)
        setThumbPos(pos)
    }

    useEffect(() => {
        updateThumb()
        window.addEventListener("resize", updateThumb)
        return () => window.removeEventListener("resize", updateThumb)
    }, [])

    return (
        <section
            className="w-full relative flex flex-col gap-6"
        >
            <div
                className="flex flex-col items-start space-y-4"
            >
                <Image
                    className="mb-8"
                    src="/logos/png-logo-3x.png"
                    alt="Maillard logo"
                    width={64}
                    height={64}
                />
                <h2
                    className="text-title-md"
                >
                    ترکیب‌های محبوب
                </h2>
                <p
                    className="text-label-md text-gray-500a"
                >
                    انتخاب‌هایی ماندگار برای هدیه دادن یا لذت‌بردن روزمره؛ شامل ترکیب‌های منتخب از قهوه‌های آسیاب‌شده، دانه کامل و ابزارهای دم‌آوری برای تجربه‌ای کامل از قهوه.
                </p>
            </div>

            {/* Product row */}
            <div
                className="w-full flex items-center gap-4.25 overflow-x-auto scroll-smooth no-scrollbar"
                ref={scrollRef}
                onScroll={updateThumb}
                role="list"
                aria-label="Best Products"                
            >
                {placeholderProducts.map((product) => (
                    <CategoryCard 
                        imgSrc={product.imgSrc}
                        title={product.title}
                        description={product.description}
                        key={product.id}
                    />
                ))}
            </div>

            {/* Custom scrollbar track + thumb */}
            <div className="relative h-0.5 bg-gray-150 mt-6">
                <div
                    className="absolute top-0 h-full bg-black transition-transform duration-75"
                    style={{ width: `${thumbWidth}px`, transform: `translateX(${thumbPos}px)` }}
                />
            </div>            
        </section>
    )
}

export default FavoritesSection