"use client"

import { useRef, useState, useEffect } from "react"
import { useMediaQuery } from "usehooks-ts"
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

  const isDesktop = useMediaQuery("(min-width: 1024px)")

  const products = isDesktop ? placeholderProducts.slice(0, 3) : placeholderProducts

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

    const width = (clientWidth / scrollWidth) * clientWidth
    setThumbWidth(width)

    const pos = (scrollLeft / (scrollWidth - clientWidth)) * (clientWidth - width)
    setThumbPos(pos)
  }

  useEffect(() => {
    if (!isDesktop) {
      updateThumb()
      window.addEventListener("resize", updateThumb)
      return () => window.removeEventListener("resize", updateThumb)
    }
  }, [isDesktop])

  return (
    <div className="widthLimit relative">
        {/* Header + buttons */}
        <div 
            className="w-full flex items-center justify-between mb-4"
        >
        <h3 className="text-title-md md:hidden">برترین‌ها</h3>
        {!isDesktop && (
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
        )}
      </div>

      {/* Products row */}
        <section
            ref={scrollRef}
            onScroll={updateThumb}
            role="list"
            aria-label="Best Products"
            className={`
                w-full gap-4.25
                ${isDesktop ? "grid grid-cols-3 gap-6 overflow-visible" : "flex overflow-x-auto scroll-smooth no-scrollbar"}
            `}
        >
            {products.map((product, index) => (
                <div
                    key={product.id}
                    ref={!isDesktop && index === 0 ? cardRef : null}
                    className={isDesktop ? "w-full" : "min-w-[280px] max-w-[320px]"}
                >
                    <ProductCard
                        imgSrc={product.imgSrc}
                        title={product.title}
                        price={product.price}
                    />
                </div>
            ))}
        </section>

      {/* Custom scrollbar (mobile only) */}
        {!isDesktop && (
            <div className="relative h-0.5 bg-gray-150 mt-12">
                <div
                    className="absolute top-0 h-full bg-black transition-transform duration-75"
                    style={{ width: `${thumbWidth}px`, transform: `translateX(${thumbPos}px)` }}
                />
            </div>
        )}
    </div>
  )
}

export default BestProducts
