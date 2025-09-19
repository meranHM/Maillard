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
                "rounded-[36px] cursor-pointer transition-colors",
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