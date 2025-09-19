export const sizeStyles = {
    sm: "px-4 py-1 text-label-md",
    md: "px-4 py-2 text-label-md",
    lg: "p-4 text-label-lg",
}

export const variantStyles = {
    outline: {
        rest: "border border-black bg-white text-black shadow-sm backdrop-blur-sm",
        hover: "border border-black bg-gray-100 text-black shadow-md backdrop-blur-md",
        selected: "border border-black bg-black text-white shadow-md backdrop-blur-md",
        disabled: "border border-gray-300 bg-gray-50 text-gray-500 shadow-sm backdrop-blur-sm",
    },
    fill: {
        rest: "border border-black bg-black text-white shadow-sm backdrop-blur-sm",
        hover: "border border-black bg-gray-600a text-white shadow-md backdrop-blur-md",
        selected: "border border-black bg-black text-white shadow-md backdrop-blur-md",
        disabled: "border border-gray-50 bg-gray-50 text-gray-300 shadow-sm backdrop-blur-sm",
    },
    text: {
        rest: "border-none text-black backdrop-blur-sm",
        hover: "border-none text-gray-800 backdrop-blur-md",
        selected: "border-none text-black backdrop-blur-md",
        disabled: "border-none text-gray-500 backdrop-blur-sm",
    },
    tonal: {
        rest: "border-none bg-gray-50 text-black backdrop-blur-sm",
        hover: "border-none bg-gray-100a text-black backdrop-blur-md",
        selected: "border border-black bg-black text-white backdrop-blur-md",
        disabled: "border border-gray-50 bg-gray-50 text-gray-300 backdrop-blur-sm",
    },
}

export type ButtonSize = keyof typeof sizeStyles
export type ButtonVariant = keyof typeof variantStyles
export type ButtonState = keyof typeof variantStyles["fill"]