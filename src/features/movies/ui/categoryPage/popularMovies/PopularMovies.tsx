import { type FC, useEffect, useState } from 'react'
import { CategoryContent } from '@/features/movies/ui/categoryPage/categoryContent'
import { useGetPopularMoviesQuery } from '@/features/movies/api/movieListsApi.ts'
import { popularMovies } from '@/common/constants'


export const PopularMovies: FC = () => {
  const [page, setPage] = useState<number>(1)
  const { data, isLoading } = useGetPopularMoviesQuery({page})
  const onChangePage = (page: number)=>{
    setPage(page)
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [data, page])

  return (
    <CategoryContent onChangePage={onChangePage} isLoading={isLoading} moviesData={data} categoryTitle={popularMovies.title} />
  )
}