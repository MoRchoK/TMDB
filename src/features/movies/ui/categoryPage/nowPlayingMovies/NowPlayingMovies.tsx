import { useGetNowPlayingMoviesQuery } from '@/features/movies/api/movieListsApi.ts'
import { CategoryContent } from '@/features/movies/ui/categoryPage/categoryContent'
import { popularMovies } from '@/common/constants'





export const NowPlayingMovies = () => {
  const { data, isLoading } = useGetNowPlayingMoviesQuery({})


  return (
    <CategoryContent isLoading={isLoading} moviesData={data} categoryTitle={popularMovies.title} />
  )

}