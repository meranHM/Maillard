import HeroCarousel from "../ui/HeroCarousel"
import { Button } from "../ui/Button"

const CategoryHero = () => {
  return (
    <div
        className="relative w-full h-[424px] flex items-center justify-between bg-gray-50 p-8"
    >
        <span
            className="absolute top-8 right-8 text-label-md"
        >
            طعم جدید
        </span>

        <div
            className="h-full flex flex-col justify-end gap-4 text-black w-5/11 flex-shrink-0"
        >

            <h2 className="text-title-lg">قهوه تایپ A</h2>
            <p
                className="text-label-lg text-pretty"
            >
                قهوه کولومبیا ارموسو پینک هیدرو از دانه‌های ۱۰۰٪ عربیکای آمریکای مرکزی و جنوبی تهیه شده که با برشتگی میان‌روست، طعمی متعادل، ملایم و در عین حال لایه‌لایه ارائه می‌دهد. ترکیبی از نُت‌های میوه‌ای، آجیلی و کاراملی در کنار اسیدیته متوسط رو به زیاد و تلخی ملایم، این قهوه را به گزینه‌ای ایده‌آل برای شروع روز یا لحظه‌های آرام عصر تبدیل کرده است
            </p>
            <div
                className="flex items-center gap-2 mt-4"
            >
                <Button
                    variant="outline"
                    size="md"
                >
                    بیشتر بدانید
                </Button>

                <Button
                    variant="outline"
                    size="md"
                >
                    خاستگاه
                </Button>
            </div>
        </div>

        <div
            className="flex-1 flex justify-end"
        >
            <HeroCarousel />
        </div>
    </div>
  )
}

export default CategoryHero