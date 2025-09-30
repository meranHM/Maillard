import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

type ContainerProps = HTMLAttributes<HTMLDivElement>

const Container: React.FC<ContainerProps> = ({ 
    className, 
    children,
    ...props
}) => {
  return (
    <div
        className={cn(
            "widthLimit flex flex-col items-center justify-center gap-10 px-6.75 py-4.75 mt-6.25",
            className
        )}
        {...props}
    >
        {children}
    </div>
  )
}

export default Container