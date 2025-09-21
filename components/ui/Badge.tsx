import { ReactNode, ButtonHTMLAttributes } from "react"
import { sizeStyles, variantStyles, BadgeSize, BadgeVariant } from "./badgeStyles"
import clsx from "clsx"

type BadgeProps = {
    size?: BadgeSize
    variant?: BadgeVariant
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>


export const Badge = ({
    size = "md",
    variant = "fill",
    children,
    className,
    ...props
}: BadgeProps) => {
    const variantClasses = variantStyles[variant]

    return (
        <span
            className={clsx(
                "flex items-center rounded-[36px] text-nowrap",
                sizeStyles[size],
                variantClasses.rest,
                variantClasses.hover,
                variantClasses.disabled,
                className,
            )}
            {...props}
        >
            {children}
        </span>
    )
}