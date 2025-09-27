import Image from "next/image"
import Container from "../ui/Container"
import { Button } from "../ui/Button"
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon"

const MottoSection = () => {
  return (
    <Container
      className="relative w-full max-w-[371px] h-[500px] bg-gradient-to-b from-[#FAFAFA] via-[#FFFFFF00] to-[#F0F0F0]"
    >
      <div
        className="z-0"
      >
        <Image
          className="object-cover object-center pointer-events-none select-none"
          src="/images/motto-section-image.png"
          alt="Decorative"
          fill
        />
      </div>

      <div
        className="absoulte inset-0 h-full flex flex-col items-center justify-end gap-2 z-10"
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
    </Container>
  )
}

export default MottoSection