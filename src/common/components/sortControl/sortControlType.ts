import type { sortMoviesParamsType, SortMovieType } from '@/features/movies/api'

export type SortControlType = {
  optionsData: sortMoviesParamsType[]
  value: SortMovieType
  onChange: (value: SortMovieType) => void
}