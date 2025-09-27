"use client"

import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"
import { useUiStore } from "@/store/uiStore"

export const slides = [
    { id: 1, src: "/images/slide-image-1.png", alt: "Slide 1" },
    { id: 2, src: "/images/slide-image-1.png", alt: "Slide 2" },
    { id: 3, src: "/images/slide-image-1.png", alt: "Slide 3" },
]


const HeroCarousel = () => {
    const { currentSlide, angle, nextSlide, goToSlide } = useUiStore()

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide(slides.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div
            className="relative w-[185px] h-[260px] shadow-mobile-light lg:shadow-desktop-heavy"
        >
            <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{ "--angle": `${angle}deg` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                background: `conic-gradient(from var(--angle, 0deg) at 55% 70%,
                    #f8f8f8,
                    #d9d9d9,
                    #ffffff,
                    #979797,
                    #b7b7b7,
                    #717171,
                    #f8f8f8)`,
                }}
            />

            {/* Current Slide */}
            <div
                className="absolute z-10 w-full h-full flex items-center justify-center overflow-hidden"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        className="w-full h-full flex items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <Image 
                            className="p-2"
                            src={slides[currentSlide].src}
                            alt={slides[currentSlide].alt}
                            width={130}
                            height={90}
                        />                        
                    </motion.div>
                </AnimatePresence>
            </div>


        </div>
  )
}

export default HeroCarousel