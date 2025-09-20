import type { Metadata } from "next"
import "@/styles/globals.css"
import locaLFont from "next/font/local"
import { Header } from "@/components/layout/Header"

const parastoo = locaLFont({
  src: [
    {
      path: "./fonts/Parastoo.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Parastoo-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Parastoo-FD.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Parastoo-Bold-FD.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-parastoo"
})

export const metadata: Metadata = {
  title: "Maillard",
  description: "Maillard E-Commerce website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body
        className={`${parastoo.variable} antialiased bg-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
