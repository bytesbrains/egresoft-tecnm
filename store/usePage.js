import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// Esta función crea un objeto de almacenamiento que usa sessionStorage
const createSessionStorage = () => ({
  getItem: (key) => sessionStorage.getItem(key),
  setItem: (key, value) => sessionStorage.setItem(key, value),
  removeItem: (key) => sessionStorage.removeItem(key)
})

export const usePage =
  typeof window !== 'undefined'
    ? create(
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
            storage: createSessionStorage()
          }
        )
      )
    : null
