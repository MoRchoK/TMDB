import { useEffect, useState } from 'react'
import type { baseResultsMovieResponseType } from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'



export const useBannerImage = (moviesData: baseResultsMovieResponseType[]) => {

  const [bannerImage, setBannerImage] = useState<string | null >(null)

  useEffect(() => {
    if (!moviesData?.length) return
    const id = setTimeout(() => {
      const idx = Math.floor(Math.random() * moviesData.length)
      setBannerImage(moviesData[idx]?.backdrop_path ?? null)
    }, 0)

    return () => clearTimeout(id)
  }, [moviesData])

  return bannerImage
}