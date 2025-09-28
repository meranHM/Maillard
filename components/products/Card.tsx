import { ReactNode } from "react"
import clsx from "clsx"


interface CardProps {
    children: ReactNode
    className?: string
    onClick?: () => void
}


const Card: React.FC<CardProps> = ({
    children,
    className,
    onClick,
}) => {
    return (
        <div
            className={clsx(
                "flex flex-col gap-6 border-none cursor-pointer rounded-2xl overflow-hidden",
                "w-full min-w-[232px] h-auto",
                className
            )}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Card