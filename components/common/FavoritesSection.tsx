"use client"

import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, PanInfo } from "motion/react"
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
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [scrollPercentage, setScrollPercentage] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [canScroll, setCanScroll] = useState(false)

    const thumbX = useMotionValue(0)
    const springConfig = { damping: 30, stiffness: 300 }
    const thumbXSpring = useSpring(thumbX, springConfig)

    // Move useTransform to the top level - ALWAYS called, not conditionally
    const thumbPosition = useTransform(thumbXSpring, (v) => {
        if (!scrollContainerRef.current) return 0
        const track = scrollContainerRef.current.parentElement?.querySelector("[data-scrollbar-track]")
        if (!track) return 0
        const trackWidth = track.getBoundingClientRect().width
        const thumbWidth = 80
        return v * (trackWidth - thumbWidth)
    })

    // Checking if content is scrollable
    useEffect(() => {
        const checkScrollable = () => {
            if (scrollContainerRef.current) {
                const { scrollWidth, clientWidth } = scrollContainerRef.current
                setCanScroll(scrollWidth > clientWidth)
            }
        }

        checkScrollable()
        window.addEventListener('resize', checkScrollable)
        return () => window.removeEventListener('resize', checkScrollable)
    }, [])

    // Updating scroll percentage on scroll
    const handleScroll = () => {
        if (!scrollContainerRef.current) return

        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        const maxScroll = scrollWidth - clientWidth
        const percentage = maxScroll > 0 ? scrollLeft / maxScroll : 0
        
        setScrollPercentage(percentage)
        if (!isDragging) {
            thumbX.set(percentage)
        }
    }

    // Handling scrollbar track click
    const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!scrollContainerRef.current || e.target !== e.currentTarget) return

        const track = e.currentTarget
        const rect = track.getBoundingClientRect()
        const clickX = e.clientX - rect.left
        const percentage = clickX / rect.width

        const { scrollWidth, clientWidth } = scrollContainerRef.current
        const maxScroll = scrollWidth - clientWidth
        scrollContainerRef.current.scrollLeft = percentage * maxScroll
    }

    // Handling thumb drag
    const handleThumbDrag = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (!scrollContainerRef.current) return

        const track = scrollContainerRef.current.parentElement?.querySelector('[data-scrollbar-track]')
        if (!track) return

        const trackRect = track.getBoundingClientRect()
        const { scrollWidth, clientWidth } = scrollContainerRef.current
        const maxScroll = scrollWidth - clientWidth

        // Calculating percentage based on drag position
        const dragX = 'clientX' in info.point ? info.point.x : info.point.x
        const relativeX = Math.max(0, Math.min(dragX - trackRect.left, trackRect.width))
        const percentage = relativeX / trackRect.width

        scrollContainerRef.current.scrollLeft = percentage * maxScroll
        thumbX.set(percentage)
    }  

    return (
        <section
            className="widthLimit relative flex flex-col gap-6 overflow-hidden mt-22 md:mt-28 lg:mt-34"
        >
            <div
                className="w-full flex flex-col gap-6 md:flex-row"
            >
                {/* Header and Logo */}
                <div
                    className="w-full md:min-w-[380px] flex flex-col items-start space-y-4"
                >
                    <Image
                        className="mb-8"
                        src="/logos/png-logo-3x.png"
                        alt="Maillard logo"
                        width={64}
                        height={64}
                    />
                    <h2
                        className="text-title-md md:text-headline-sm"
                    >
                        ترکیب‌های محبوب
                    </h2>
                    <p
                        className="text-label-md text-gray-500a w-full max-w-[292px]"
                    >
                        انتخاب‌هایی ماندگار برای هدیه دادن یا لذت‌بردن روزمره؛ شامل ترکیب‌های منتخب از قهوه‌های آسیاب‌شده، دانه کامل و ابزارهای دم‌آوری برای تجربه‌ای کامل از قهوه.
                    </p>
                </div>

                {/* Scrollable area with custom scrollbar */}
                <div
                    className="flex flex-col gap-4 flex-1"
                >
                    {/* Scrollbar container */}
                    <div
                        className="overflow-x-auto overflow-y-hidden scrollbar-hide"
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        style={{ 
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                         }}
                    >
                        <div
                            className="flex gap-4.25"
                            role="list"
                            aria-label="Best Products"
                        >
                            {placeholderProducts.map((product) => (
                                <div
                                    className="flex-shrink-0"
                                    key={product.id}
                                >
                                    <CategoryCard
                                        imgSrc={product.imgSrc}
                                        title={product.title}
                                        description={product.description}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Custom Scrollbar */}
                    {canScroll && (
                        <div
                            className="relative h-0.5 bg-gray-150 rounded-full cursor-pointer group"
                            data-scrollbar-track
                            onClick={handleTrackClick}
                        >
                            <motion.div
                                className="absolute top-0 h-0.5 w-20 bg-black rounded-full cursor-grab active:cursor-grabbing group-hover:bg-gray-900 transition-colors"
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0}
                                dragMomentum={false}
                                onDragStart={() => setIsDragging(true)}
                                onDragEnd={() => setIsDragging(false)}
                                onDrag={handleThumbDrag}
                                style={{
                                    x: thumbPosition
                                }}
                                whileHover={{ scaleY: 1.5 }}
                                whileTap={{ scaleY: 1.5 }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default FavoritesSection