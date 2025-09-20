"use client"

import Image from "next/image"
import { useState } from "react"
import { MenuIcon } from "../icons/MenuIcon"
import { CartIcon } from "../icons/CartIcon"
import { CloseIcon } from "../icons/CloseIcon"
import { ProfileIcon } from "../icons/ProfileIcon"
import { Button } from "../ui/Button"
import Link from "next/link"

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

/* Desktop View */
const NavLinks = () => (
  <nav
    className="hidden lg:flex gap-6"
    aria-label="Primary"
  >
    <Link
      className="hover:shadow-sm transition-shadow"
      href="/"
    >
      جستجو
    </Link>

    <Link
      className="hover:shadow-sm transition-shadow"
      href="/blog"
    >
      مجله قهوه
    </Link>

    <Link
      className="hover:shadow-sm transition-shadow"
      href="/about"
    >
      درباره ما
    </Link>
  </nav>
)

const CartButton = () => (
  <Button
    className="relative p-2 hover:bg-gray-150a transition-colors"
    variant="text"
    aria-label="Cart"
  >
    <CartIcon className="w-5 h-5"/>

    {/* Item Count */}
    <span
      className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full px-1"
    >
      2
    </span>
  </Button>
)

const ProfileButton = () => (
  <Button
    className="p-2 hover:bg-gray-150a transition-colors"
    variant="text"
    aria-label="Profile"
  >
    <ProfileIcon className="w-5 h-5"/>
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
    <MenuIcon className="w-5 h-5"/>
  </Button>
)

/* Mobile Navbar Menu */
const MobileDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  if (!isOpen) return null
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 lg:hidden"
    >
      <div
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4"
      >
        <Button
          className="mb-6 p-2"
          variant="text"
          onClick={onClose}
          aria-label="Close menu"
        >
          <CloseIcon className="w-5 h-5"/>
        </Button>
        <nav
          className="flex flex-col gap-4"
        >
          <Link href="/">جستجو</Link>

          <Link href="/blog">مجله قهوه</Link>

          <Link href="/about">درباره ما</Link>

          <Link href="/profile">حساب کاربری</Link>
        </nav>
      </div>
    </div>
  )
}

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <header
      className="w-full bg-white backdrop-blur-lg sticky top-0 z-40"
    >
      <div
        className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16"
      >
        {/* Mobile Header */}
        <div
          className="flex w-full items-center justify-between lg:hidden"
        >
          <div
            className="flex items-center gap-2"
          >
            <HamburgerMenu 
              onToggle={() => setMenuOpen(true)}
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

      {/* Mobile Navbar */}
      <MobileDrawer isOpen={menuOpen} onClose={() => setMenuOpen(false)}/>
    </header>
  )
}