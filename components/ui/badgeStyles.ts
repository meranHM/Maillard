export const sizeStyles = {
    sm: "px-4 py-1 text-label-md",
    md: "px-4 py-2 text-label-md",
    lg: "p-4 text-label-lg",
}

export const variantStyles = {
    outline: {
        rest: "border border-black bg-white text-black shadow-sm backdrop-blur-sm",
        hover: "bg-gray-100  shadow-md backdrop-blur-md",
        selected: "border-black bg-black text-white",
        disabled: "border-gray-300 bg-gray-50 text-gray-500 shadow-sm backdrop-blur-sm",
    },
    fill: {
        rest: "border border-black bg-black text-white shadow-sm backdrop-blur-sm",
        hover: "bg-gray-600 shadow-md backdrop-blur-md",
        selected: "bg-black text-white",
        disabled: "border-gray-50 bg-gray-50 text-gray-300",
    },
    text: {
        rest: "border-none text-black backdrop-blur-sm",
        hover: "text-gray-800 backdrop-blur-md",
        selected: "text-black backdrop-blur-md",
        disabled: "text-gray-500",
    },
    tonal: {
        rest: "border-none bg-gray-50 text-black backdrop-blur-sm",
        hover: "bg-gray-100 backdrop-blur-md",
        selected: "border-black bg-black text-white",
        disabled: "bg-gray-50 text-gray-300",
    },
}



export type BadgeSize = keyof typeof sizeStyles
export type BadgeVariant = keyof typeof variantStyles