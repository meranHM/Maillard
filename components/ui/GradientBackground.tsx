"use client"

import { motion } from "motion/react"
import { useUiStore } from "@/store/uiStore"

const GradientBackground = () => {
    const { angle } = useUiStore()

    return (
        <motion.div 
            className="size-[180px] h-[250px] rounded-xl"
            animate={{ "--angle": `${angle}deg` } as any}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
                background: `conic-gradient(from var(--angle, 0deg),
                    #f8f8f8,
                    #d9d9d9,
                    #ffffff,
                    #979797,
                    #b7b7b7,
                    #717171,
                    #f8f8f8)`,
            }}
        />
    )
}

export default GradientBackground
