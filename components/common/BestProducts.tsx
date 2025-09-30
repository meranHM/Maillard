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

  const updateThumb = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current

    const width = (clientWidth / scrollWidth) * clientWidth
    setThumbWidth(width)

    const pos = (scrollLeft / (scrollWidth - clientWidth)) * (clientWidth - width)
    setThumbPos(pos)
  }

  useEffect(() => {
    updateThumb()
    window.addEventListener("resize", updateThumb)
    return () => window.removeEventListener("resize", updateThumb)
  }, [])

  return (
    <div className="widthLimit relative">
      {/* Header */}
      <div 
        className="w-full flex items-center justify-between mb-4 md:hidden"
      >
        <h3 className="text-title-md">برترین‌ها</h3>

        {/* Scroll buttons (mobile only) */}
        <div className="flex items-center gap-2 md:hidden">
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

      {/* Mobile: scrollable row */}
      <section
        ref={scrollRef}
        onScroll={updateThumb}
        role="list"
        aria-label="Best Products"
        className="flex gap-4.25 overflow-x-auto scroll-smooth no-scrollbar md:hidden"
      >
        {placeholderProducts.map((product, index) => (
          <div
            key={product.id}
            ref={index === 0 ? cardRef : null}
            className="min-w-[280px] max-w-[320px]"
          >
            <ProductCard
              imgSrc={product.imgSrc}
              title={product.title}
              price={product.price}
            />
          </div>
        ))}
      </section>

      {/* Desktop: flex with 3 items */}
      <section
        className="hidden md:w-full md:flex md:justify-between md:items-center gap-6"
        role="list"
        aria-label="Best Products"
      >
        {placeholderProducts.slice(0, 3).map((product) => (
          <div key={product.id} className="w-full">
            <ProductCard
              imgSrc={product.imgSrc}
              title={product.title}
              price={product.price}
            />
          </div>
        ))}
      </section>

      {/* Custom scrollbar (mobile only) */}
      <div className="relative h-0.5 bg-gray-150 mt-12 md:hidden">
        <div
          className="absolute top-0 h-full bg-black transition-transform duration-75"
          style={{ width: `${thumbWidth}px`, transform: `translateX(${thumbPos}px)` }}
        />
      </div>
    </div>
  )
}

export default BestProducts
