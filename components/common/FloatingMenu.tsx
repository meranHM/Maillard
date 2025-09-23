import Link from "next/link"
import { MenuIcon } from "../icons/MenuIcon"

const links = [
  { label: "محصولات", href: "/" },
  { label: "پاد قهوه", href: "/" },
  { label: "برشته کاری", href: "/" },
  { label: "آزمایشگاه", href: "/" },
]

const FloatingMenu = () => {
  return (
    <div
      className="fixed bottom-10 right-1/2 translate-x-1/2 flex items-center justify-between w-full max-w-[371px] h-14.5 px-1.5 bg-white/70 border border-gray-100 rounded-6xl backdrop-blur-[20px] overflow-hidden"
    >
      {links.map((link) => (
        <Link
          className={`flex items-center px-1.5 py-2 xs:px-2 rounded-[37px] text-nowrap text-label-sm xs:text-label-lg ${
            link.label === "محصولات" ? "bg-[#F2F2F2]/70 backdrop-blur-lg gap-1" : ""
          }`}
          key={link.label}
          href={link.href}
        >
          {link.label === "محصولات" && (
            <MenuIcon className="w-4 h-4"/>
          )}
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default FloatingMenu