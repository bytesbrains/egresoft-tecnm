'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const usePage = create(
  persist(
    (set) => ({
      currentPage: sessionStorage.getItem('current-page') || 'Inicio',
      currentTab: parseInt(sessionStorage.getItem('current-tab')) || 0,
      setCurrentPage: (page) => {
        set({ currentPage: page })
        sessionStorage.setItem('current-page', page)
      },
      setCurrentTab: (index) => {
        set({ currentTab: index })
        sessionStorage.setItem('current-tab', index.toString())
      }
    }),
    {
      name: 'page-state',
      getStorage: () => createJSONStorage(() => sessionStorage)
    }
  )
)
