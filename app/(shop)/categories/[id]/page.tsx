"use client"

import Container from "@/components/ui/Container"
import CategoryHero from "@/components/categories/CategoryHero"
import CategoryFilter from "@/components/categories/CategoryFilter"
import CategoryGrid from "@/components/categories/CategoryGrid"

// Placeholder data - will replace with real data later
const PLACEHOLDER_PRODUCTS = [
    { id: "0", imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
    { id: "1", imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
    { id: "2", imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
    { id: "3", imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
    { id: "4", imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
    { id: "5", imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
    { id: "6", imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
    { id: "7", imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
    { id: "8", imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
    { id: "9", imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
    { id: "10", imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
    { id: "11", imgSrc: "/images/png-product-placeholder-3x.png", title: "قهوه آسیاب‌شده بلوند مایارد", description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه ای مناسب برای شروع روز با انرژی" },
]



const CategoryDetailsPage = () => {
    /* const params = useParams()
    const productId = params.id as string */

    const products = PLACEHOLDER_PRODUCTS

    /* const breadcrumbItems = [
        { label: product.category, href: `/category/${product.category.toLowerCase()}` },
        { label: product.name, href: `/products/${productId}` },
    ] */

  return (
    <Container>
      {/* <BreadCrumbs customItems={breadcrumbItems} className="mb-6 hidden md:block" /> */}
      
      <div
        className="w-full flex flex-col space-y-20"
      >
        <CategoryHero />

        <CategoryFilter />

        <CategoryGrid 
            products={products}
        />

      </div>
    </Container>
  )
}

export default CategoryDetailsPage