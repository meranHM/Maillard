import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { useState, useEffect } from "react"
import { ChevronLeftIcon } from "../icons/ChevronLeftIcon"
import { ChevronRightIcon } from "../icons/ChevronRightIcon"


interface ProductCarouselProps {
    images: Array<{ id: number; src: string; alt: string }>
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [direction, setDirection] = useState(0)

    const navigateSlide = (newIndex: number) => {
        setDirection(newIndex > currentSlide ? 1 : -1)
        setCurrentSlide(newIndex)
    }

    const nextSlide = () => {
        const newIndex = (currentSlide + 1) % images.length
        navigateSlide(newIndex)
    }

    const prevSlide = () => {
        const newIndex = (currentSlide - 1 + images.length) % images.length
        navigateSlide(newIndex)
    }

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prevSlide()
            if (e.key === "ArrowRight") nextSlide()
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [currentSlide])

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0
        })
    }

    return (
        <div
            className="relative bg-[#FBFBFB] flex flex-col items-center gap-4 py-4"
            role="region"
            aria-roledescription="carousel"
            aria-label="Product images"
        >
            {/* Image Container - Responsive with aspect ratio */}
            <div className="relative w-full max-w-[368px] aspect-[368/495] md:max-w-[665px] md:aspect-[665/638] overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute inset-0"
                    >
                        <Image 
                            src={images[currentSlide].src}
                            alt={images[currentSlide].alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 368px, 665px"
                            priority={currentSlide === 0}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
                className="w-10 h-10 absolute top-1/2 -translate-y-1/2 left-2 z-10 hover:bg-gray-150a rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={prevSlide}
                aria-label="Previous slide"
                disabled={images.length <= 1}
            >
                <ChevronLeftIcon className="text-gray-700" />
            </button>
            
            <button
                className="w-10 h-10 absolute top-1/2 -translate-y-1/2 right-2 z-10 hover:bg-gray-150a rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={nextSlide}
                aria-label="Next slide"
                disabled={images.length <= 1}
            >
                <ChevronRightIcon className="text-gray-700" />
            </button>

            {/* Carousel Indicators */}
            <div 
                className="flex gap-2 z-20"
                role="tablist"
                aria-label="Slide navigation"
            >
                {images.map((_, index) => (
                    <button 
                        key={index}
                        className={`w-10 h-0.5 transition-all duration-300 ${
                            index === currentSlide ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        onClick={() => navigateSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-selected={index === currentSlide}
                        role="tab"
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductCarousel