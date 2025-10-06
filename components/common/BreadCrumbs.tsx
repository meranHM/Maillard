"use client"

import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment, useMemo } from "react"

export interface BreadCrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  customItems?: BreadCrumbItem[]
  className?: string
  homeLabel?: string
  separator?: React.ReactNode
  maxItems?: number
}

export const BreadCrumbs = ({
  customItems,
  className = "",
  homeLabel = "Home",
  separator,
  maxItems,
}: BreadcrumbsProps) => {
  const pathname = usePathname()

  const breadcrumbs = useMemo(() => {
    if (customItems) {
      return [{ label: homeLabel, href: "/" }, ...customItems]
    }

    // Auto-generating breadcrumbs from pathname
    const segments = pathname.split("/").filter(Boolean)
    const items: BreadCrumbItem[] = [{ label: homeLabel, href: "/" }]

    segments.forEach((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/")
      const label = formatSegment(segment)
      items.push({ label, href })
    })

    return items
  }, [pathname, customItems, homeLabel])

  const displayItems = useMemo(() => {
    if (!maxItems || breadcrumbs.length <= maxItems) {
      return breadcrumbs
    }

    // Keeping first, last, and collapse middle items
    const first = breadcrumbs[0]
    const last = breadcrumbs[breadcrumbs.length - 1]
    const remaining = breadcrumbs.slice(1, -1)
    const toShow = maxItems - 2 // Excluding first and last

    if (toShow <= 0) {
      return [first, last]
    }

    return [first, ...remaining.slice(-toShow), last]
  }, [breadcrumbs, maxItems])

  const defaultSeparator = (
    <ChevronRight className="h-4 w-4 text-gray-400" aria-hidden="true" />
  )

  return (
    <nav
      className={`flex items-center space-x-2 text-sm ${className}`}
      aria-label="BreadCrumb"
    >
      <ol className="flex items-center space-x-2">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1
          const isFirst = index === 0

          return (
            <Fragment key={item.href}>
              <li className="flex items-center">
                {isLast ? (
                  <span
                    className="font-medium text-gray-900"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {isFirst && <Home className="h-4 w-4" aria-hidden="true" />}
                    <span>{isFirst ? "" : item.label}</span>
                  </Link>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true" className="flex items-center">
                  {separator || defaultSeparator}
                </li>
              )}
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
}

function formatSegment(segment: string): string {
  // Removing route groups like (shop)
  if (segment.startsWith("(") && segment.endsWith(")")) {
    return ""
  }

  // Decoding URI components and format
  const decoded = decodeURIComponent(segment)
  
  // Converting kebab-case and snake_case to Title Case
  return decoded
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
}