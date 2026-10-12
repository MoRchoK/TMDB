import type { baseResultsMovieResponseType } from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'

export type MovieCardType = {
  moviesData: baseResultsMovieResponseType[]
  categoryTitle: string
  redirectPath?: string
  countCard?: number

}