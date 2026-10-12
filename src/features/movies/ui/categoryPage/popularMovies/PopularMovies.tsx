import type { FC } from 'react'
import { CategoryContent } from '@/features/movies/ui/categoryPage/categoryContent'
import { useGetPopularMoviesQuery } from '@/features/movies/api/movieListsApi.ts'
import { popularMovies } from '@/common/constants'


export const PopularMovies: FC = () => {
  const { data, isLoading } = useGetPopularMoviesQuery({})

  return (
    <CategoryContent isLoading={isLoading} moviesData={data} categoryTitle={popularMovies.title} />
  )
}