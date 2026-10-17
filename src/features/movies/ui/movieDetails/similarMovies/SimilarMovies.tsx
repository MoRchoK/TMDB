import type { FC } from 'react'
import { Typography } from '@mui/material'
import s from '../movieDetails.module.css'
import type { SimilarMoviesType } from './similarMoviesType.ts'
import { getUrlPoserImage } from '@/common/utils/getUrlPosterImage.ts'
import { MoviesListItem } from '@/features/movies/ui/movieCard/moviesLists/moviesListItem/MoviesListItem.tsx'


export const SimilarMovies: FC<SimilarMoviesType> = ({ movies }) => {
  return (
    <section className={s.section}>
      <Typography className={s.sectionTitle}>Similar Movies</Typography>
      <div className={s.similarGrid}>
        {movies.map((item, index) => {
            if (index > 5) return null
            return (<MoviesListItem key={item.id}
                                    id={item.id}
                                    imageUrl={getUrlPoserImage(item.poster_path, 'w154')}
                                    rating={Number(item.vote_average.toFixed(1))}
                                    title={item.title} />)
          },
        )}
      </div>
    </section>
  )
}
