import type { SortMovieType } from '@/features/movies/api'
import type { genreType } from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'

export type FiltersPanelType = {
  ratingRangeHandler: ({ maxValue, minValue }: { maxValue: number, minValue: number })=>void
  resetFormHandler: ()=> void
  formTagsHandler: (id: number)=> void
  activeGenresId: number[]
  onChangeSort: (value: SortMovieType)=> void
  sortValue: SortMovieType
  genres: genreType[]
  minValueRating: number
  maxValueRating: number
}