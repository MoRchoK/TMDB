import type { FC } from 'react'
import { useGetUpcomingMoviesQuery } from '@/features/movies/api/movieListsApi.ts'
import { CategoryContent } from '@/features/movies/ui/categoryPage/categoryContent'
import { popularMovies } from '@/common/constants'




export const UpcomingMovies: FC = () => {
  const { data, isLoading } = useGetUpcomingMoviesQuery({})
  return (
    <CategoryContent isLoading={isLoading} moviesData={data} categoryTitle={popularMovies.title} />
  )
}