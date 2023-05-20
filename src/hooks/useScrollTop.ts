import { useEffect } from 'react'

export function useScrollTop() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' })
    })
  }, [])
}
