import { ReactNode, ButtonHTMLAttributes } from "react"
import { sizeStyles, variantStyles, ButtonSize, ButtonVariant, ButtonState } from "./buttonStyles"
import clsx from "clsx"

type ButtonProps = {
    size?: "sm" | "md" | "lg"
    variant?: "fill" | "outline" | "text" | "tonal"
    state?: "rest" | "hover" | "selected" |"disabled"
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>


export const Button = ({
    size = "md",
    variant = "fill",
    state = "rest",
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={clsx(sizeStyles[size], variantStyles[variant][state], "rounded-[36px]")}
            {...props}
            disabled={state === "disabled"}
        >
            {children}
        </button>
    )
}