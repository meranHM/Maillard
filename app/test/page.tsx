import { Button } from '@/components/ui/Button'
import { FABButton } from '@/components/ui/FABButton'
import CategoryCard from '@/components/products/CategoryCard'
import React from 'react'
import ProductCard from '@/components/products/ProductCard'

const page = () => {
  return (
    <div
        className="w-full min-h-screen bg-white flex flex-col items-center justify-center gap-6 overflow-x-hidden"
    >
        <h2 className="font-bold text-center">Buttons</h2>
        {/* Buttons */}
        <div
            className="flex flex-col gap-6"
        >
            <h3 className="font-semibold text-center mt-6">Small</h3>
            {/* Small */}
            <div
                className="grid grid-cols-3 gap-6 place-items-center"
            >
                <Button
                    size="sm"
                    variant="outline"
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="sm"
                    variant="outline"
                    isSelected
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="sm"
                    variant="outline"
                    disabled
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="sm"
                    variant="fill"
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="sm"
                    variant="fill"
                    isSelected
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="sm"
                    variant="fill"
                    disabled
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="sm"
                    variant="text"
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="sm"
                    variant="text"
                    isSelected
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="sm"
                    variant="text"
                    disabled
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="sm"
                    variant="tonal"
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="sm"
                    variant="tonal"
                    isSelected
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="sm"
                    variant="tonal"
                    disabled
                >
                    بیشتر بدانید +
                </Button>
            </div>

            <h3 className='font-semibold text-center mt-6'>Medium</h3>
            {/* Medium */}
            <div
                className="grid grid-cols-3 gap-6 place-items-center"
            >
                <Button
                    size="md"
                    variant="outline"
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="md"
                    variant="outline"
                    isSelected
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="md"
                    variant="outline"
                    disabled
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="md"
                    variant="fill"
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="md"
                    variant="fill"
                    isSelected
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="md"
                    variant="fill"
                    disabled
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="md"
                    variant="text"
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="md"
                    variant="text"
                    isSelected
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="md"
                    variant="text"
                    disabled
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="md"
                    variant="tonal"
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="md"
                    variant="tonal"
                    isSelected
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="md"
                    variant="tonal"
                    disabled
                >
                    بیشتر بدانید +
                </Button>
            </div>

            <h3 className='font-semibold text-center mt-6'>Large</h3>
            {/* Large */}
            <div
                className="grid grid-cols-3 gap-6 place-items-center"
            >
                <Button
                    size="lg"
                    variant="outline"
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="lg"
                    variant="outline"
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="lg"
                    variant="outline"
                >
                    بیشتر بدانید +
                </Button>
                <Button
                    size="lg"
                    variant="fill"
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="lg"
                    variant="fill"
                    isSelected
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="lg"
                    variant="fill"
                    disabled
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="lg"
                    variant="text"
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="lg"
                    variant="text"
                    isSelected
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="lg"
                    variant="text"
                    disabled
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="lg"
                    variant="tonal"
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="lg"
                    variant="tonal"
                    isSelected
                >
                    بیشتر بدانید +
                </Button>

                <Button
                    size="lg"
                    variant="tonal"
                    disabled
                >
                    بیشتر بدانید +
                </Button>
            </div>

            <h3 className='font-semibold text-center mt-6'>FAB Small</h3>
            <div
                className="flex items-center justify-between"
            >
                <FABButton
                    size="sm"
                >
                    +
                </FABButton>

                <FABButton
                    size="sm"
                    isSelected
                >
                    +
                </FABButton>

                <FABButton
                    size="sm"
                    disabled
                >
                    +
                </FABButton>
            </div>

            <h3 className='font-semibold text-center mt-6'>FAB Medium</h3>
            <div
                className="flex items-center justify-between"
            >
                <FABButton
                    size="md"
                >
                    +
                </FABButton>

                <FABButton
                    size="md"
                    isSelected
                >
                    +
                </FABButton>

                <FABButton
                    size="md"
                    disabled
                >
                    +
                </FABButton>
            </div>

            <h3 className='font-semibold text-center mt-6'>FAB Large</h3>
            <div
                className="flex items-center justify-between"
            >
                <FABButton
                    size="lg"
                >
                    +
                </FABButton>

                <FABButton
                    size="lg"
                    isSelected
                >
                    +
                </FABButton>

                <FABButton
                    size="lg"
                    disabled
                >
                    +
                </FABButton>
            </div>
        </div>

        {/* Category Cards */}
        <div
            className='grid grid-cols-[repeat(auto-fit,minmax(176px,1fr))] gap-6'
        >
            <CategoryCard 
                imgSrc="/images/png-product-placeholder-3x.png"
                title="قهوه آسیاب‌شده بلوند مایارد"
                description="طعم ملایم و متعادل با نت‌های شکلات و مرکبات
گزینه‌ای مناسب برای شروع روز با انرژی" />

            <CategoryCard 
                imgSrc="/images/png-product-placeholder-3x.png"
                title="قهوه آسیاب‌شده بلوند مایارد"
                description="طعم ملایم و متعادل با نت‌های شکلات و مرکبات
گزینه‌ای مناسب برای شروع روز با انرژی" />

            <CategoryCard 
                imgSrc="/images/png-product-placeholder-3x.png"
                title="قهوه آسیاب‌شده بلوند مایارد"
                description="طعم ملایم و متعادل با نت‌های شکلات و مرکبات
گزینه‌ای مناسب برای شروع روز با انرژی" />

            <CategoryCard 
                imgSrc="/images/png-product-placeholder-3x.png"
                title="قهوه آسیاب‌شده بلوند مایارد"
                description="طعم ملایم و متعادل با نت‌های شکلات و مرکبات
گزینه‌ای مناسب برای شروع روز با انرژی" />
        </div>

        {/* Product Cards */}
        <div
            className='w-full px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center'
        >
            <ProductCard 
                imgSrc="/images/png-product-placeholder-3x.png"
                title="قهوه آسیاب‌شده بلوند مایارد"
                price=" 855,000"
            />
            <ProductCard 
                imgSrc="/images/png-product-placeholder-3x.png"
                title="قهوه آسیاب‌شده بلوند مایارد"
                price=" 855,000"
            />
            <ProductCard 
                imgSrc="/images/png-product-placeholder-3x.png"
                title="قهوه آسیاب‌شده بلوند مایارد"
                price=" 855,000"
            />
            <ProductCard 
                imgSrc="/images/png-product-placeholder-3x.png"
                title="قهوه آسیاب‌شده بلوند مایارد"
                price=" 855,000"
            />
        </div>

        <div></div>
    </div>
  )
}

export default page