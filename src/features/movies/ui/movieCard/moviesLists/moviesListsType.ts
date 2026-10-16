import type { moviesDataType } from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'



export type MoviesListsType = {
  moviesData: moviesDataType[] | null
  countCard?: number
}


