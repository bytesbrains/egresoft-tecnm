import { usePage } from '@/store/usePage'
import { useEffect } from 'react'

export const useCurrentPage = (title) => {
  const { currentPage, setCurrentPage } = usePage()

  useEffect(() => {
    setCurrentPage(title)
  }, [])

  return { currentPage }
}
