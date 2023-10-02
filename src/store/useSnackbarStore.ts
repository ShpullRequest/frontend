import { create } from 'zustand'
import { createSelectors } from './createSelectors'
import { ReactNode } from 'react'
import { devtools, persist } from 'zustand/middleware'

interface Snackbar {
    snackbar: ReactNode,
    setSnackbar: (snackbar: ReactNode) => void
}

  const useSnackbarStoreBase = create<Snackbar>()(devtools((set) => ({
    snackbar: null,
    setSnackbar: (snackbar) => set({ snackbar }) 
  })))

 export const useSnackbarStore = createSelectors(useSnackbarStoreBase)
