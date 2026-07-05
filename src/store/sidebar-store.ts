import { create } from "zustand"

interface SidebarState {
  isOpen: boolean
  isCollapsed: boolean
  setOpen: (open: boolean) => void
  toggleOpen: () => void
  toggleCollapsed: () => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  isCollapsed: false,
  setOpen: (open) => set({ isOpen: open }),
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  toggleCollapsed: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
}))
