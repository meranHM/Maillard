import { ReactNode, ButtonHTMLAttributes } from "react"
import { sizeStyles, variantStyles, ButtonSize, ButtonVariant } from "./buttonStyles"
import clsx from "clsx"

type ButtonProps = {
    size?: ButtonSize
    variant?: ButtonVariant
    isSelected?: boolean,
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>


export const Button = ({
    size = "md",
    variant = "fill",
    isSelected = false,
    children,
    className,
    ...props
}: ButtonProps) => {
    const variantClasses = variantStyles[variant]

    return (
        <button
            className={clsx(
                "flex items-center rounded-5xl transition-colors text-nowrap",
                sizeStyles[size],
                variantClasses.rest,
                variantClasses.hover,
                variantClasses.disabled,
                isSelected && variantClasses.selected,
                className,
            )}
            aria-selected={isSelected}
            {...props}
        >
            {children}
        </button>
    )
}