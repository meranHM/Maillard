export const sizeStyles = {
    sm: "px-4 py-1 text-label-md",
    md: "px-4 py-2 text-label-md",
    lg: "p-4 text-label-lg",
}

export const variantStyles = {
    outline: {
        rest: "border border-black bg-white text-black shadow-sm backdrop-blur-sm",
        hover: "hover:bg-gray-100  hover:shadow-md hover:backdrop-blur-md",
        selected: "aria-selected:border-black aria-selected:bg-black aria-selected:text-white",
        disabled: "disabled:border-gray-300 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-sm disabled:backdrop-blur-sm disabled:cursor-not-allowed",
    },
    fill: {
        rest: "border border-black bg-black text-white shadow-sm backdrop-blur-sm",
        hover: "hover:bg-gray-600 hover:shadow-md hover:backdrop-blur-md",
        selected: "aria-selected:bg-black aria-selected:text-white",
        disabled: "disabled:border-gray-50 disabled:bg-gray-50 disabled:text-gray-300 disabled:cursor-not-allowed",
    },
    text: {
        rest: "border-none text-black backdrop-blur-sm",
        hover: "hover:text-gray-800 hover:backdrop-blur-md",
        selected: "aria-selected:text-black aria-selected:backdrop-blur-md",
        disabled: "disabled:text-gray-500 disabled:cursor-not-allowed",
    },
    tonal: {
        rest: "border-none bg-gray-50 text-black backdrop-blur-sm",
        hover: "hover:bg-gray-100 hover:backdrop-blur-md",
        selected: "aria-selected:border-black aria-selected:bg-black aria-selected:text-white",
        disabled: "disabled:bg-gray-50 disabled:text-gray-300 disabled:cursor-not-allowed",
    },
}

export const fabSizeStyles = {
    sm: "p-1 w-8 h-8 text-label-md",
    md: "p-2 w-10 h-10 text-label-md",
    lg: "p-4 w-14 h-14 text-label-lg",    
}

export type ButtonSize = keyof typeof sizeStyles
export type ButtonVariant = keyof typeof variantStyles
export type FabSize = keyof typeof fabSizeStyles