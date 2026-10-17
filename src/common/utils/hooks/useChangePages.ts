import { useCallback, useEffect, useRef, useState } from 'react'



export const useChangePages = (): [number, (page: number) => void] => {
  const [page, setPage] = useState(1)

  const onChangePage = useCallback((next: number) => {
    setPage(next)
  }, [])

  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  return [page, onChangePage]
}