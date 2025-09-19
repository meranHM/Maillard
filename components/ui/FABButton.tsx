import { ReactNode, ButtonHTMLAttributes } from "react"
import { fabSizeStyles, variantStyles, FabSize } from "./buttonStyles"
import clsx from "clsx"

type FABButtonProps = {
    size?: FabSize
    floating?: boolean
    isSelected?: boolean,
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>


export const FABButton = ({
    size = "md",
    floating = false,
    isSelected = false,
    children,
    className,
    ...props
}: FABButtonProps) => {
    const variantClasses = variantStyles.fill

    return (
        <button
            className={clsx(
                "flex items-center justify-center rounded-full cursor-pointer transition-colors",
                fabSizeStyles[size],
                variantClasses.rest,
                variantClasses.hover,
                variantClasses.disabled,
                isSelected && variantClasses.selected,
                floating && "fixed bottom-6 right-6"
            )}
            aria-selected={isSelected}
            {...props}
        >
            {children}
        </button>
    )
}