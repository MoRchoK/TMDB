import { MoviesListItem } from "./moviesListItem"
import s from './moviesLists.module.css'
import { type FC, memo } from 'react'
import type { MoviesListsType } from './moviesListsType.ts'
import { getUrlPoserImage } from '@/common/utils/getUrlPosterImage.ts'


export const MoviesLists = memo(({moviesData}) => {
  return (
    <div className={s.movieCardWrapper}>
      {moviesData.map((movie) => <MoviesListItem
            rating={Number(movie.vote_average.toFixed(1))}
            title={movie.title}
            imageUrl={getUrlPoserImage(movie.poster_path, 'w185')}
            key={movie.id} />)}
    </div>
  )
}) as  FC<MoviesListsType>