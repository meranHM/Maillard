import { ReactNode, ButtonHTMLAttributes } from "react"
import { sizeStyles, variantStyles, BadgeSize, BadgeVariant } from "./badgeStyles"
import clsx from "clsx"

type BadgeProps = {
    size?: BadgeSize
    variant?: BadgeVariant
    state?: "rest" | "hover" | "selected" | "disabled"
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>


const getBadgeClasses = (
    size: BadgeSize, 
    variant: BadgeVariant, 
    state: "rest" | "hover" | "selected" | "disabled"
) => {
    return clsx(sizeStyles[size], variantStyles[variant][state])
}

export const Badge = ({
    size = "md",
    variant = "fill",
    state = "rest",
    children,
    className,
    ...props
}: BadgeProps) => {


    return (
        <span
            className={`${getBadgeClasses(size, variant, state)} rounded-[36px]`}
            {...props}
        >
            {children}
        </span>
    )
}