import Image from "next/image"
import Container from "../ui/Container"
import { Button } from "../ui/Button"
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon"

const MottoSection = () => {
  return (
    <Container
      className="relative w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#FAFAFA] via-[#FFFFFF00] to-[#F0F0F0]"
    >
      {/* Underlay */}
      <div
        className="z-0 absolute w-full max-w-[371px] h-auto"
      >
        <Image
          className="object-cover object-center pointer-events-none select-none"
          src="/images/motto-section-image.png"
          alt="Decorative"
          width={371}
          height={500}
        />
      </div>

      <div
        className="absolute max-md:inset-0 md:bottom-11 md:right-12 h-full flex flex-col items-center md:items-start justify-end gap-2 z-10"
      >
        <h2
            className="text-label-md md:text-title-lg"
        >
            فناوری جدید، تجربه‌ای آشنا
        </h2>

        {/* Mobile View Button */}
        <Button
          className="md:hidden"
          variant="outline"
          size="sm"
        >
            بیشتر بدانید
            <ArrowLeftIcon className="w-6 h-6"/>
        </Button>

        {/* Mobile View Button */}
        <Button
          className="hidden md:block"
          variant="outline"
          size="md"
        >
            بیشتر بدانید
        </Button>
      </div>
    </Container>
  )
}

export default MottoSection