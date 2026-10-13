import { type FC, useEffect, useState } from 'react'
import { useGetTopRatedMoviesQuery } from '@/features/movies/api/movieListsApi.ts'
import { CategoryContent } from '../categoryContent'
import { popularMovies } from '@/common/constants'


export const TopRatedMovies: FC = () => {
  const [page, setPage] = useState<number>(1)
  const { data, isLoading, isFetching } = useGetTopRatedMoviesQuery({page})


  const onChangePage = (page: number)=>{
    setPage(page)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [data, page])


  return (
    <CategoryContent onChangePage={onChangePage}
                     isFetching={isFetching}
                     isLoading={isLoading}
                     moviesData={data}
                     categoryTitle={popularMovies.title} />
  )
}