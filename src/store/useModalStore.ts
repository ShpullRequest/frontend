import {create} from 'zustand'
import {createSelectors} from './createSelectors'

interface ModalStore {
	modal: string | null
	setModal: (modal: string | null) => void
	cardModalData: any | null
	setCardModalData: (data: any) => void

	clearModal: () => void
}

const ModalStoreBase = create<ModalStore>()((set) => ({
	modal: null,
	setModal: (modal) => set({modal}),
	clearModal: () => set({modal: null}),
	cardModalData: null,
	setCardModalData: (data) => set({data}),
}))

export const useModalStore = createSelectors(ModalStoreBase)
