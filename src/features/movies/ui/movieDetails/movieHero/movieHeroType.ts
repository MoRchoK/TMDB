import type { detailsMovieResponseType } from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'

export type MovieHeroType = {
  movie: detailsMovieResponseType
  onBack: () => void
}
