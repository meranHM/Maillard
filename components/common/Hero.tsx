"use client"

import { ArrowLeftIcon } from "../icons/ArrowLeftIcon"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"
import Container from "../ui/Container"
import HeroCarousel from "../ui/HeroCarousel"
import { useUiStore } from "@/store/uiStore"
import { slides } from "../ui/HeroCarousel"


const Hero = () => {
    const { currentSlide, goToSlide } = useUiStore()

    return (
        <Container
            className="bg-[#FAFAFA] py-10"
        >
            <Badge
                variant="tonal"
                size="md"
                state="rest"
            >
                طعم جدید
            </Badge>

            <HeroCarousel />

            <div
                className="flex flex-col items-center gap-2"
            >
                <h2
                    className="text-label-md"
                >
                    فناوری جدید، تجربه‌ای آشنا
                </h2>

                <Button
                    variant="outline"
                    size="sm"
                >
                    بیشتر بدانید
                    <ArrowLeftIcon className="w-6 h-6"/>
                </Button>
            </div>

            {/* Carousel Indicators */}
            <div
                className="flex gap-2 z-20"
            >
                {slides.map((_, index) => (
                    <button 
                        className={`w-10 h-0.5 transition-all duration-300 ${index === currentSlide ? "bg-black" : "bg-gray-150"}`}
                        aria-label={`Go to slide ${index + 1}`}
                        key={index}
                        onClick={() => goToSlide(index, slides.length)}
                    />
                ))}
            </div>
        </Container>
    )
}

export default Hero