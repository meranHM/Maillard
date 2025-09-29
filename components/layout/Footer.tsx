import Image from "next/image"
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon"
import { Button } from "../ui/Button"
import Link from "next/link"

const customerServices = [
    { label: "تماس با ما", href: "/" },
    { label: "سوالات پر‌تکرار", href: "/" },
    { label: "پیگیری سفارش", href: "/" },
    { label: "مرجوعی کالا", href: "/" },
]

const policies = [
    { label: "فوانین و مقررات", href: "/" },
    { label: "بیانیه دسترسی‌پذیری", href: "/" },
    { label: "نقشه سایت", href: "/" },
]

const dedicatedServices = [
    { label: "ارسال رایگان", href: "/" },
    { label: "بسته بندی هدیه با امضای مایارد", href: "/" },
    { label: "افزودن پیام شخصی به هدیه", href: "/" },
]

const socials = [
    { label: "اینستاگرام", href: "/" },
    { label: "تلگرام", href: "/" },
    { label: "لینکدین", href: "/" },
]

const WebMapLink = ({href, children}: { href: string, children: React.ReactNode }) => {
    return (
        <Link
            className="text-label-md text-black"
            href={href}
        >
            {children}
        </Link>
    )
}

const footerSections = [
  { title: "خدمات مشتریان", links: customerServices },
  { title: "قوانین و سیاست‌ها", links: policies },
  { title: "خدمات اختصاصی", links: dedicatedServices },
]

export const Footer = () => {
  return (
    <footer className="flex flex-col">
        {/* Newsletter */}
        <div 
            className="w-full py-10 border-y border-gray-100"
        >
            <div 
                className="widthLimit flex flex-col md:flex-row justify-between gap-10 px-6"
            >
                <div 
                    className="flex flex-col items-center md:items-start max-w-md"
                >
                    <Image 
                        className="mb-6"
                        src="/logos/png-logo-3x.png" 
                        alt="Maillard Logo"
                        width={64} 
                        height={64} 
                    />
                    <h3 
                        className="text-title-lg mb-4"
                    >
                        همیشه در جریان باشید
                    </h3>
                    <p 
                        className="text-label-md text-gray-500 mb-8 max-w-sm text-center md:text-right"
                    >
                    با عضویت در خبرنامه مایارد، از تازه‌ترین محصولات، تخفیف‌ها و مقالات تخصصی درباره قهوه باخبر شوید.
                    </p>
                    <form className="w-full max-w-sm">
                        <label 
                            htmlFor="email" 
                            className="sr-only"
                        >
                            ایمیل
                        </label>
                        <div 
                            className="flex bg-white/40 backdrop-blur-md border border-black rounded-5xl overflow-hidden"
                        >
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="ایمیل خود را وارد کنید"
                                className="flex-1 pr-6 pl-4 py-2 placeholder:text-gray-500 focus:outline-none"
                            />
                            <button
                                className="border-none rounded-full hover:bg-gray-150a p-1"
                                type="submit"
                            >
                                <ArrowLeftIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </form>
                </div>

                {/* Footer Links */}
                <div 
                    className="grid grid-cols-2 md:grid-cols-3 gap-8"
                >
                    {footerSections.map((section) => (
                        <div 
                            key={section.title} 
                            className="flex flex-col gap-3"
                        >
                            <h4 
                                className="text-title-sm text-gray-500 text-nowrap mb-2"
                            >
                            {section.title}
                            </h4>
                            {section.links.map((link) => (
                                <WebMapLink key={link.label} href={link.href}>
                                    {link.label}
                                </WebMapLink>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
      </div>

      {/* Socials + Copyright */}
        <div 
            className="widthLimit flex flex-col md:flex-row items-center justify-between pb-24 pt-6 px-6 gap-4"
        >
            <div className="flex gap-6">
                {socials.map((link) => (
                    <a key={link.label} href={link.href} className="text-label-md text-black">
                    {link.label}
                    </a>
                ))}
            </div>
            <div className="flex items-center gap-6">
            <p className="text-label-md text-gray-400">© 2025 Maillard</p>
            <Image src="/logos/png-logotype-3x.png" alt="Maillard Logo Type" width={100} height={22} />
            </div>
        </div>
    </footer>
  )
}
