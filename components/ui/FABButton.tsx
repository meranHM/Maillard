import { ReactNode, ButtonHTMLAttributes } from "react"
import { sizeStyles, variantStyles, ButtonSize, ButtonState } from "./buttonStyles"
import clsx from "clsx"

type FABButtonProps = {
    size?: "sm" | "md" | "lg"
    state?: "rest" | "hover" | "selected" | "disabled"
    children: ReactNode
    floating?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>


export const FABButton = ({
    size = "md",
    state = "rest",
    children,
    floating = false,
    ...props
}: FABButtonProps) => {
    return (
        <button
            className={clsx(
                sizeStyles[size],
                variantStyles.fill[state],
                "rounded-full",
                floating && "fixed bottom-6 right-6"
            )}
            {...props}
            disabled={state === "disabled"}
        >
            {children}
        </button>
    )
}