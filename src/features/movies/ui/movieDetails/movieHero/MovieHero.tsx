import type { FC } from 'react'
import { Chip, Typography } from '@mui/material'
import s from '../movieDetails.module.css'
import type { MovieHeroType } from './movieHeroType.ts'
import { getUrlPoserImage } from '@/common/utils/getUrlPosterImage.ts'
import { BaseButton } from '@/common/components/button/baseButton'
import { RATING_STYLES } from '@/common/constants'
import { formatRuntime } from '@/common/utils/formatRuntime.ts'


export const MovieHero: FC<MovieHeroType> = ({ movie, onBack }) => {
  const rating = Number(movie.vote_average.toFixed(1))
  const threshold = rating < 5 ? 'low' : rating < 7 ? 'medium' : 'high'
  const { bg, color } = RATING_STYLES[threshold]
  const year = movie.release_date && new Date(movie.release_date)

  return (
    <section className={s.heroSection}>
      <img className={s.poster} src={getUrlPoserImage(movie.poster_path, 'w342')}
           alt={movie.title || 'poster'} />
      <div className={s.infoColumn}>
        <div className={s.titleRow}>
          <h1 className={s.title}>
            {movie.title}
          </h1>
          <BaseButton title={'Back'} onClick={onBack} />
        </div>
        <div className={s.metaRow}>
          <span className={s.metaText}>Release year: {year && year.getFullYear()}</span>
          <span className={s.ratingCard} style={{ backgroundColor: bg, color: color }}>{rating}</span>
          <span className={s.metaText}>Runtime: {formatRuntime(movie.runtime)}</span>
        </div>
        <Typography className={s.description}>{movie.overview}</Typography>
        <div className={s.genresBlock}>
          <Typography className={s.genresLabel}>Genres</Typography>
          <div className={s.genresList}>
            {movie.genres.map((genre) => (
              <Chip key={genre.id} className={s.genreChip} label={genre.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
