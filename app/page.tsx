"use client"

import BestProducts from "@/components/common/BestProducts"
import BlogSection from "@/components/common/BlogSection"
import FavoritesSection from "@/components/common/FavoritesSection"
import FloatingMenu from "@/components/common/FloatingMenu"
import Hero from "@/components/common/Hero"
import MottoSection from "@/components/common/MottoSection"

export default function Home() {

  return (
    <>
      <div 
        className="flex flex-col items-center px-5 space-y-6"
      >
        <Hero />
 
        <MottoSection />

        <BestProducts />

        <FavoritesSection />

        <BlogSection />
      </div>

      <FloatingMenu />
    </>
  )
}