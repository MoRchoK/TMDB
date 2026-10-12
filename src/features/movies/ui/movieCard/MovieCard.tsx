import { type FC, memo } from 'react'
import s from './movieCard.module.css'
import { HeaderMovieCard } from '@/features/movies/ui/movieCard/headerMovieCard/HeaderMovieCard.tsx'
import { MoviesLists } from '@/features/movies/ui/movieCard/moviesLists/MoviesLists.tsx'
import type { MovieCardType } from '@/features/movies/ui/movieCard/movieCardType.ts'





export const MovieCard  = memo(({moviesData, categoryTitle, redirectPath}) => {
  return (
    <div className={s.movieCardContainer}>
      <HeaderMovieCard categoryTitle={categoryTitle}
                       buttonTitle={'View more'}
                       redirectPath={redirectPath}/>
      <MoviesLists moviesData={moviesData} />
    </div>
  )
}) as FC<MovieCardType>