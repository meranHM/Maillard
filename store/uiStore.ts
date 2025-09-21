// UI Zustand states (modals, Hamburgur menus, theme)
import { create } from "zustand"

interface uiStoreState {
    mobileNavbarOpen: boolean
    toggleMobileNavbar: () => void
    index: number
    angle: number
    next: () => void
    prev: () => void
}

export const useUiStore = create<uiStoreState>((set) => ({
    index: 0,
    angle: 0,
    mobileNavbarOpen: false,

    toggleMobileNavbar: () => 
        set((state) => ({ mobileNavbarOpen: !state.mobileNavbarOpen })),

    next: () =>
        set((state) => ({
            index: state.index + 1,
            angle: state.angle + 45,
        })),
    
    prev: () =>
        set((state) => ({
            index: state.index - 1,
            angle: state.angle - 45,
        })),
}))