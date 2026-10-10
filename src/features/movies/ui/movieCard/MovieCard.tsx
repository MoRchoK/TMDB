import type { FC } from 'react'
import s from './movieCard.module.css'
import { HeaderMovieCard } from '@/features/movies/ui/movieCard/headerMovieCard/HeaderMovieCard.tsx'
import { MoviesLists } from '@/features/movies/ui/movieCard/moviesLists/MoviesLists.tsx'


export const MovieCard: FC = () => {

  return (
    <div className={s.movieCardContainer}>
      <HeaderMovieCard />
      <MoviesLists/>
    </div>
  )
}