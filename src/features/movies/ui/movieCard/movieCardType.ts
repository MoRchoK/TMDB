import type {
  moviesDataType,
} from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'

export type MovieCardType = {
  moviesData: moviesDataType[] | null
  categoryTitle: string
  redirectPath?: string
  countCard?: number

}