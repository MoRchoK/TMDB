import { useEffect, useState } from 'react'



export const useChangePages = (): [number, (page: number)=>void] => {
  const [page, setPage] = useState<number>(1)
  
  const onChangePage = (page: number)=>{
    setPage(page)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])


  return [page, onChangePage ]
}