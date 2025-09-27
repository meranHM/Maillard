// UI Zustand states (modals, Hamburgur menus, theme)
import { create } from "zustand"

interface uiStoreState {
    mobileNavbarOpen: boolean
    toggleMobileNavbar: () => void
    currentSlide: number
    angle: number
    nextSlide: (totalSlides: number) => void
    goToSlide: (index: number, totalSlides: number) => void
}

export const useUiStore = create<uiStoreState>((set) => ({
    currentSlide: 0,
    angle: 0,
    mobileNavbarOpen: false,

    toggleMobileNavbar: () => 
        set((state) => ({ mobileNavbarOpen: !state.mobileNavbarOpen })),

    nextSlide: (total) =>
        set((state) => ({
            currentSlide: (state.currentSlide + 1) % total,
            angle: state.angle + 45,
        })),

    goToSlide: (index, total) =>
        set((state) => ({
            currentSlide: index % total,
            angle: state.angle + 45
        }))
    

}))