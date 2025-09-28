"use client"

import { useRef, useState, useEffect } from "react"
import ProductCard from "../products/ProductCard"
import { ChevronLeftIcon } from "../icons/ChevronLeftIcon"
import { ChevronRightIcon } from "../icons/ChevronRightIcon"

const placeholderProducts = [
    { id: 0, imgSrc: "/images/png-product-placeholder-3x.png", title: "کلمبیا ارموسو پینک هیدرو", price: "855000" },
    { id: 1, imgSrc: "/images/png-product-placeholder-3x.png", title: "کلمبیا ارموسو پینک هیدرو", price: "855000" },
    { id: 2, imgSrc: "/images/png-product-placeholder-3x.png", title: "کلمبیا ارموسو پینک هیدرو", price: "855000" },
    { id: 3, imgSrc: "/images/png-product-placeholder-3x.png", title: "کلمبیا ارموسو پینک هیدرو", price: "855000" },
    { id: 4, imgSrc: "/images/png-product-placeholder-3x.png", title: "کلمبیا ارموسو پینک هیدرو", price: "855000" },
    { id: 5, imgSrc: "/images/png-product-placeholder-3x.png", title: "کلمبیا ارموسو پینک هیدرو", price: "855000" },
]


const BestProducts = () => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)

    const [thumbWidth, setThumbWidth] = useState(0)
    const [thumbPos, setThumbPos] = useState(0)

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current || !cardRef.current) return
        const cardWidth = cardRef.current.offsetWidth
        const gap = 16
        const scrollAmount = cardWidth + gap
        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        })
    }

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
    <div className="w-full relative">
        {/* Header + buttons */}
        <div className="w-full flex items-center justify-between mb-4">
            <h3 className="text-title-md">برترین‌ها</h3>
            <div className="flex items-center gap-2">
                <button
                    className="bg-gray-150 hover:bg-gray-150a transition-colors rounded-full"
                    onClick={() => scroll("right")}
                    aria-label="Scroll right"
                >
                    <ChevronRightIcon className="w-6 h-6" />
                </button>
                <button
                    className="bg-gray-150 hover:bg-gray-150a transition-colors rounded-full"
                    onClick={() => scroll("left")}
                    aria-label="Scroll left"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
            </div>
        </div>

        {/* Products row */}
        <section
            className="w-full flex items-center gap-4.25 overflow-x-auto scroll-smooth no-scrollbar"
            ref={scrollRef}
            onScroll={updateThumb}
            role="list"
            aria-label="Best Products"
        >
            {placeholderProducts.map((product, index) => (
                <div key={product.id} ref={index === 0 ? cardRef : null}>
                    <ProductCard 
                        imgSrc={product.imgSrc} 
                        title={product.title} 
                        price={product.price} />
                </div>
            ))}
        </section>

        {/* Custom scrollbar track + thumb */}
        <div className="relative h-0.5 bg-gray-150 mt-12">
            <div
                className="absolute top-0 h-full bg-black transition-transform duration-75"
                style={{ width: `${thumbWidth}px`, transform: `translateX(${thumbPos}px)` }}
            />
        </div>
    </div>
  )
}

export default BestProducts
