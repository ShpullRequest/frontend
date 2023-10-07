import { create } from 'zustand'
import { createSelectors } from './createSelectors'

interface ModalStore {
    modal: string | null,
    setModal: (modal: string | null) => void,
    clearModal: () => void
}

  const ModalStoreBase = create<ModalStore>()((set) => ({
    modal: null,
    setModal: (modal) => set({ modal }),
    clearModal: () => set({modal: null})
  }))

 export const useModalStore = createSelectors(ModalStoreBase)