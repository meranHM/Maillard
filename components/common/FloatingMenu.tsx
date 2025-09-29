import Link from "next/link"
import { MenuIcon } from "../icons/MenuIcon"
import { useUiStore } from "@/store/uiStore"

const links = [
  { label: "محصولات", href: "/" },
  { label: "پاد قهوه", href: "/" },
  { label: "برشته کاری", href: "/" },
  { label: "آزمایشگاه", href: "/" },
]

const FloatingMenu = () => {
  const { mobileNavbarOpen } = useUiStore()

  return (
    <>
      {!mobileNavbarOpen && (
        <div
          className="
            fixed bottom-6 right-1/2 translate-x-1/2
            flex items-center justify-between
            w-[92%] sm:w-[90%] max-w-[371px]
            h-12 sm:h-14
            px-1 sm:px-2
            bg-white/70 border border-gray-100 rounded-6xl
            backdrop-blur-[20px] z-50
            overflow-x-scroll xs:overflow-hidden
          "
        >
          {links.map((link) => (
            <Link
              className={`
                flex items-center rounded-[37px] text-nowrap
                px-2 py-1 sm:px-3 sm:py-2
                text-label-xs sm:text-label-sm md:text-label-lg
                ${link.label === "محصولات"
                  ? "bg-[#F2F2F2]/70 backdrop-blur-lg gap-1"
                  : ""}
              `}
              key={link.label}
              href={link.href}
            >
              {link.label === "محصولات" && (
                <MenuIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4"/>
              )}
              {link.label}
            </Link>
          ))}
        </div>        
      )}
    </>
  )
}

export default FloatingMenu