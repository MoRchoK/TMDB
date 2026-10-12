import type { FC } from 'react'
import { useGetTopRatedMoviesQuery } from '@/features/movies/api/movieListsApi.ts'
import { CategoryContent } from '../categoryContent'
import { popularMovies } from '@/common/constants'


export const TopRatedMovies: FC = () => {
  const { data, isLoading } = useGetTopRatedMoviesQuery({})
  return (
    <CategoryContent isLoading={isLoading}  moviesData={data} categoryTitle={popularMovies.title} />
  )
}