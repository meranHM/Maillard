"use client"

import Image from "next/image"
import AnimatedContainer from "../ui/AnimatedContainer"
import { motion, AnimatePresence } from "motion/react"
import { useUiStore } from "@/store/uiStore"
import { MenuIcon } from "../icons/MenuIcon"
import { CartIcon } from "../icons/CartIcon"
import { CloseIcon } from "../icons/CloseIcon"
import { ProfileIcon } from "../icons/ProfileIcon"
import { Button } from "../ui/Button"
import Link from "next/link"

const navLinks = [
  { href: "/", label: "جستجو" },
  { href: "/blog", label: "مجله قهوه" },
  { href: "/about", label: "درباره ما" },
]

const Logo = ({ className }: { className?: string }) => (
  <Link
    className={`${className || ""}`}
    href="/"
  >
    <Image
      src="/logos/png-logotype-3x.png"
      alt="Maillard Logo"
      width={125}
      height={32}
    />
  </Link>
)

const CartButton = ({ count = 4 }: { count?: number }) => (
  <Button
    className="relative p-2 hover:bg-gray-150a transition-colors"
    variant="text"
    aria-label="Cart"
  >
    <CartIcon className="w-6 h-6"/>

    {/* Item Count */}
    <span
      className="absolute top-1 right-1 text-xs bg-red-500 text-white rounded-full px-1" 
    >
      {count}
    </span>
  </Button>
)

const ProfileButton = () => (
  <Button
    className="p-2 hover:bg-gray-150a transition-colors"
    variant="text"
    aria-label="Profile"
  >
    <ProfileIcon className="w-6 h-6"/>
  </Button>
)

/* Hamburger Menu Mobile View */
const HamburgerMenu = ({ onToggle }: { onToggle: () => void }) => (
  <Button
    className="p-2 hover:bg-gray-150a transition-colors"
    variant="text"
    onClick={onToggle}
    aria-label="Open Menu"
  >
    <MenuIcon className="w-6 h-6"/>
  </Button>
)

/* Desktop View */
const NavLinks = () => (
  <nav
    className="hidden lg:flex gap-6"
    aria-label="Primary"
  >
    {navLinks.map((link) => (
      <Link
        className="hover:shadow-sm transition-shadow"
        key={link.href}
        href={link.href}
      >
        {link.label}
      </Link>
    ))}
  </nav>
)

/* Mobile Navbar Menu */
const MobileDrawer = ({
  isOpen,
  onToggle,
}: {
  isOpen: boolean
  onToggle: () => void
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <AnimatedContainer
          className="fixed inset-0 w-screen h-screen z-50 bg-black/50 lg:hidden"
          variant="fade"
        >
          <motion.div
            className="fixed top-0 right-0 w-64 h-screen bg-white shadow-lg p-4"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <Button
              className="mb-6 p-2"
              variant="text"
              onClick={onToggle}
              aria-label="Close menu"
            >
              <CloseIcon className="w-6 h-6"/>
            </Button>
            
            <nav
              className="flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <Link
                  className="hover:shadow-sm transition-shadow"
                  key={link.href}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}

              <Link href="/profile">حساب کاربری</Link>
            </nav>
          </motion.div>
        </AnimatedContainer>
      )}
    </AnimatePresence>
  )
}

export const Header = () => {
  const { mobileNavbarOpen, toggleMobileNavbar } = useUiStore()

  return (
    <>
      <header
        className="w-full bg-white/60 backdrop-blur-lg sticky mt-13 lg:mt-0 top-0 z-40"
      >
        <div
          className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16"
        >
          {/* Mobile Header */}
          <div
            className="flex w-full items-center justify-between lg:hidden"
          >
            <div
              className="flex items-center sm:gap-2"
            >
              <HamburgerMenu 
                onToggle={() => toggleMobileNavbar()}
              />
              <CartButton />
            </div>
            <Logo />
          </div>

          {/* Desktop Header */}
          <div
            className="hidden lg:grid lg:grid-cols-3 lg:items-center lg:w-full"
          >
            <div
              className="flex gap-6"
            >
              <NavLinks />
            </div>
            <Logo className="mx-auto"/>
            <div
              className="flex justify-end gap-4"
            >
              <CartButton />
              <ProfileButton />
            </div>
          </div>
        </div>

      </header>

      {/* Mobile Navbar */}
      <MobileDrawer isOpen={mobileNavbarOpen} onToggle={() => toggleMobileNavbar()}/>    
    </>
  )
}