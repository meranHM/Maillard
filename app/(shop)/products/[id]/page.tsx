"use client"

import { useParams } from "next/navigation"
import { BreadCrumbs } from "@/components/common/BreadCrumbs"
import Container from "@/components/ui/Container"
import ProductDetails from "@/components/products/ProductDetails"
import ProductAfterTaste from "@/components/products/ProductAfterTaste"
import ProductExpertReview from "@/components/products/ProductExpertReview"
import MottoSection from "@/components/common/MottoSection"
import SimilarProducts from "@/components/products/SimilarProducts"

// Placeholder data - will replace with real data later
const PLACEHOLDER_PRODUCT = {
  id: "1",
  name: "کلمبیا ارموسو پینک هیدرو",
  description:
    "طعم ملایم و متعادل با نت‌های شکلات و مرکبات؛ گزینه‌ای مناسب برای شروع روز با انرژی.",
  flavorNotes: "ترکیبی هیجان‌برانگیز از شکلات تلخ، ادویه‌های گرم و نُت‌های چوبی",
  features: [
    "قهوه‌ای از دانه‌های انتخاب‌شده‌ی عربیکای آمریکای جنوبی",
    "رُست‌شده با دقت بالا",
    "مناسب برای فرنچ‌پرس، موکاپات یا دریپر",
  ],
  price: 984000,
  originalPrice: 1200000,
  images: [
    "/images/png-product-placeholder2-3x.png",
    "/images/png-product-placeholder2-3x.png",
    "/images/png-product-placeholder2-3x.png",
    "/images/png-product-placeholder2-3x.png",
  ],
  sizes: [
    { label: "250 گرم", value: "250g" },
    { label: "500 گرم", value: "500g" },
    { label: "1000 گرم", value: "1kg" },
  ],
  specifications: {
    type: "عربیکا",
    origin: "آمریکای جنوبی",
    roastLevel: "میان‌برشت (Medium Roast)",
    acidity: "متوسط",
    bitterness: "متوسط رو‌به‌کم",
    flavorProfile: "شکلاتی و مرکباتی",
  },
  grindOptions: ["آسیاب تیغه‌ای", "آسیاب آج‌دار"],
  category: "قهوه",
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
          name={product.name}
          description={product.description}
          features={product.features}
          specifications={product.specifications}
          sizes={product.sizes}
          images={product.images}
          price={product.price}
          flavorNotes={product.flavorNotes}
          grindOptions={product.grindOptions}
          inStock={product.inStock}
          category={product.category}
        />

        <ProductAfterTaste />

        <ProductExpertReview />

        <div
          className="md:hidden"
        >
          <MottoSection />
        </div>

        <SimilarProducts />
      </div>
    </Container>
  )
}