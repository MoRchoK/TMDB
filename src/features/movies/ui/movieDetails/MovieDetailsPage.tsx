import type { FC } from 'react'
import s from './movieDetails.module.css'
import {
  useGetCreditsMovieQuery,
  useGetDetailsMoviesQuery,
  useGetSimilarMoviesQuery,
} from '@/features/movies/api/movieListsApi.ts'
import { useNavigate, useParams } from 'react-router'
import { MovieDetailsPageSkeleton } from '@/common/components/skeleton/MovieDetailsPageSkeleton.tsx'
import { MovieHero } from './movieHero'
import { MovieCast } from './movieCast'
import { SimilarMovies } from './similarMovies'


export const MovieDetailsPage: FC = () => {
  const { movieId } = useParams()
  const navigate = useNavigate()
  const {
    data: creditsData,
    isLoading: isLoadingCreditsMovie,
  } = useGetCreditsMovieQuery({ movie_id: movieId! }, { skip: !movieId })
  const {
    data: detailsMoviesData,
    isLoading: isLoadingDetailsMovies,
  } = useGetDetailsMoviesQuery({ movie_id: movieId! }, { skip: !movieId })
  const {
    data: similarMoviesData,
    isLoading: isLoadingSimilarMovies,
  } = useGetSimilarMoviesQuery({ movie_id: movieId! }, { skip: !movieId })

  if (isLoadingCreditsMovie || isLoadingDetailsMovies || isLoadingSimilarMovies) return <MovieDetailsPageSkeleton />

  if (!creditsData || !detailsMoviesData || !similarMoviesData) return <span>Movies not Found</span>

  return (
    <div className={s.pageContainer}>
      <MovieHero movie={detailsMoviesData} onBack={() => navigate(-1)} />
      <MovieCast cast={creditsData.cast} />
      <SimilarMovies movies={similarMoviesData.results} />
    </div>
  )
}
