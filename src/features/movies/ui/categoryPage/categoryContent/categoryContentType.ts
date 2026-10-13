import type { baseMovieResponseType } from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'

export type CategoryContentType = {
  categoryTitle?: string;
  moviesData: baseMovieResponseType  | undefined;
  isLoading?: boolean
  isFetching?: boolean
  onChangePage?: (page: number) => void
}