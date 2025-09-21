"use client"

import GradientBackground from "@/components/ui/GradientBackground"
import Image from "next/image"
import { useUiStore } from "@/store/uiStore"

export default function Home() {
  const { next, prev } = useUiStore()

  return (
    <div 
      className="h-screen flex flex-col items-center justify-center"
    >
      <GradientBackground />
      <button onClick={next} className="p-4 cursor-pointer">Next</button>

      <button onClick={prev} className="p-4 cursor-pointer">Prev</button>
    </div>
  )
}
