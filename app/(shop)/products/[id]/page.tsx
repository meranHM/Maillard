"use client"

import { useParams } from "next/navigation"
import { BreadCrumbs } from "@/components/common/BreadCrumbs"
import Container from "@/components/ui/Container"
import ProductCarousel from "@/components/products/ProductCarousel"
import ProductDetails from "@/components/products/ProductDetails"
import ProductAfterTaste from "@/components/products/ProductAfterTaste"
import ProductExpertReview from "@/components/products/ProductExpertReview"
import MottoSection from "@/components/common/MottoSection"
import SimilarProducts from "@/components/products/SimilarProducts"

// Placeholder data - will Replace with real data later
const PLACEHOLDER_PRODUCT = {
  id: "1",
  name: "کلمبیا ارموسو پینک هیدرو",
  description: "طعم ملایم و متعادل با نت‌های شکلات و مرکبات گزینه‌ای مناسب برای شروع روز با انرژی",
  flavor: "ترکیبی هیجان‌برانگیز از شکلات تلخ، ادویه‌های گرم، و نُت‌های چوبی",
  features: [
    "قهوه ای از دانه های انتخاب شده‌ی عربیکای آمریکای جنوبی",
    "رُست شده با دقت بالا",
    "آسیاب‌شده به درجه مناسب برای فرنچ پرس، موکاپات یا دریپر",
  ],
  price: 984000,
  originalPrice: 984.000,
  images: [
    "/images/png-product-placeholder2-3x.png",
    "/images/png-product-placeholder2-3x.png",
    "/images/png-product-placeholder2-3x.png",
    "/images/png-product-placeholder2-3x.png",
  ],
  sizes: ["250 گرم", "500 گرم", "1000 گرم"],
  specifications: {
    "type": "عربیکا",
    "type2": "عربیکا",
    "acidity": "عربیکا",
    "flavor profile": "250g",
    "type3": "عربیکا",
    "roast level": "میان برشت (Medium Roast)",
  },
  grind: ["آسیاب تیغه‌ای", "آسیاب آج‌دار"],
  category: "Coffee",
  inStock: true,
}


export default function ProductDetailsPage() {
  const params = useParams()
  const productId = params.id as string

  const product = PLACEHOLDER_PRODUCT

  const breadcrumbItems = [
    { label: product.category, href: `/category/${product.category.toLowerCase()}` },
    { label: product.name, href: `/products/${productId}` },
  ]

  return (
    <Container>
      <BreadCrumbs customItems={breadcrumbItems} className="mb-6 hidden md:block" />
      
      <div
        className="w-full flex flex-col space-y-20"
      >
        <ProductDetails
          id={product.id}
          title={product.name}
          description={product.description}
          features={product.features}
          specifications={product.specifications}
          sizes={product.sizes}
          images={product.images}
          price={product.price}
          flavor={product.flavor}
          grind={product.grind}
          inStock={product.inStock}
        />

        <ProductAfterTaste />

        <ProductExpertReview />

        <MottoSection />

        <SimilarProducts />
      </div>
    </Container>
  )
}