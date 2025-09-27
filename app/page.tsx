"use client"

import FloatingMenu from "@/components/common/FloatingMenu"
import Hero from "@/components/common/Hero"
import MottoSection from "@/components/common/MottoSection"

export default function Home() {

  return (
    <div 
      className="flex flex-col items-center px-5 gap-10 min-h-[200vh]"
    >
      <Hero />

      <FloatingMenu />

      <MottoSection />
    </div>
  )
}