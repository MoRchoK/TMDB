import type { genreType } from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'

export type FormTagsType = {
  genres: genreType[]
  activeGenresId: number[]
  formTagsHandler: (id: number) => void
}

