import type {
  baseResultsMovieResponseType,
  moviesDataType,
} from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'

export const getCategoryMoviesData = (data: baseResultsMovieResponseType[] | undefined) => {
  if (!data) return undefined

  const categoryMoviesData: moviesDataType[] | undefined = data.map(movie => ({
    id: movie.id,
    title: movie.title,
    vote_average: movie.vote_average,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
  }))

  return  categoryMoviesData || null
}