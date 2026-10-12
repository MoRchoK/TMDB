import type { baseResultsMovieResponseType } from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'

export type MoviesListsType = {
  moviesData: baseResultsMovieResponseType[]
  countCard?: number
}