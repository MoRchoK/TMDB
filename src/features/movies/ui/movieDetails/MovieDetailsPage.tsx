import type { FC } from 'react'
import s from './movieDetails.module.css'
import { Avatar, Chip, Typography } from '@mui/material'
import {
  useGetCreditsMovieQuery,
  useGetDetailsMoviesQuery,
  useGetSimilarMoviesQuery,
} from '@/features/movies/api/movieListsApi.ts'
import { useNavigate, useParams } from 'react-router'
import { getUrlPoserImage } from '@/common/utils/getUrlPosterImage.ts'
import { BaseButton } from '@/common/components/button/baseButton'
import { RATING_STYLES } from '@/common/constants'
import { formatRuntime } from '@/common/utils/formatRuntime.ts'
import { MoviesListItem } from '@/features/movies/ui/movieCard/moviesLists/moviesListItem/MoviesListItem.tsx'
import { MovieDetailsPageSkeleton } from '@/common/components/skeleton/MovieDetailsPageSkeleton.tsx'


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

  if (!creditsData || !detailsMoviesData || !similarMoviesData) return <span>Not Found</span>

  const rating = Number(detailsMoviesData.vote_average.toFixed(1))
  const threshold = rating < 5 ? 'low' : rating < 7 ? 'medium' : 'high'
  const { bg, color } = RATING_STYLES[threshold]
  const year = detailsMoviesData.release_date && new Date(detailsMoviesData.release_date)


  return (
    <div className={s.pageContainer}>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className={s.heroSection}>
        <img className={s.poster} src={getUrlPoserImage(detailsMoviesData?.poster_path, 'w342')}
             alt={detailsMoviesData?.title || 'poster'} />
        <div className={s.infoColumn}>
          <div className={s.titleRow}>
            <h1 className={s.title}>
              {detailsMoviesData.title}
            </h1>
            <BaseButton title={'Back'} onClick={()=>navigate(-1)}/>
          </div>
          <div className={s.metaRow}>
            <span className={s.metaText}>Release year: {year && year.getFullYear()}</span>
            <span className={s.ratingCard} style={{ backgroundColor: bg, color: color }}>{rating}</span>
            <span className={s.metaText}>Runtime: {formatRuntime(detailsMoviesData.runtime)}</span>
          </div>
          <Typography className={s.description}>{detailsMoviesData.overview}</Typography>
          <div className={s.genresBlock}>
            <Typography className={s.genresLabel}>Genres</Typography>
            <div className={s.genresList}>
              {detailsMoviesData.genres.map((genre) => (
                <Chip key={genre.id} className={s.genreChip} label={genre.name} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Cast ─────────────────────────────────────────── */}
      <section className={s.section}>
        <Typography className={s.sectionTitle}>Cast</Typography>
        <div className={s.castGrid}>
          {creditsData.cast.map((member) => {
              if (member.order > 5) return null
              return (<div key={member.id} className={s.castItem}>
                <Avatar className={s.castAvatar} src={getUrlPoserImage(member.profile_path, 'w154')}
                        alt={member.name || 'Actor'} />
                <span className={s.castName}>{member.name}</span>
                <span className={s.castRole}>{member.original_name}</span>
              </div>)
            },
          )}
        </div>
      </section>

      {/* ─── Similar Movies ───────────────────────────────── */}
      <section className={s.section}>
        <Typography className={s.sectionTitle}>Similar Movies</Typography>
        <div className={s.similarGrid}>
          {similarMoviesData.results.map((item, index) => {
              if (index > 5) return null
              return (<MoviesListItem id={item.id}
                                      imageUrl={getUrlPoserImage(item.poster_path, 'w154')}
                                      rating={Number(detailsMoviesData.vote_average.toFixed(1))}
                                      title={item.title} />)
            },
          )}
        </div>
      </section>
    </div>
  )
}