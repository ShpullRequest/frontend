import { create } from 'zustand'
import { createSelectors } from './createSelectors'
import { UserInfo } from '@vkontakte/vk-bridge'

interface UserStore {
    user: UserInfo | null,
    setUser: (newUser: UserInfo | null) => void
}

  const useUserStoreBase = create<UserStore>()((set) => ({
    user: null,
    setUser: (newUser) => set({ user: newUser }) 
  }))

 export const useUserStore = createSelectors(useUserStoreBase)