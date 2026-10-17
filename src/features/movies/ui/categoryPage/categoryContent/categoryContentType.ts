import type { moviesDataType } from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'



export type CategoryContentType = {
  categoryTitle?: string | null;
  moviesData?: moviesDataType[]  |   undefined;
  totalPages?: number |   undefined;
  page?: number |   undefined
  isLoading?: boolean
  isFetching?: boolean
  onChangePage?: (page: number) => void
}

