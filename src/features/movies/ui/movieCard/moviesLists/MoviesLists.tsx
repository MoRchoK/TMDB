import { MoviesListItem } from './moviesListItem'
import s from './moviesLists.module.css'
import { type FC, memo } from 'react'
import type { MoviesListsType } from './moviesListsType.ts'
import { getUrlPoserImage } from '@/common/utils/getUrlPosterImage.ts'
import { defaultCardImage } from '@/common/constants'


export const MoviesLists = memo(({ moviesData, countCard = 5}) => {



  return (
    <div className={s.movieCardWrapper} style={{ gridTemplateColumns: `repeat(${countCard}, 1fr)` }}>
      {moviesData?.map((movie) => (
        <MoviesListItem
          rating={Number(movie.vote_average.toFixed(1))}
          title={movie.title}
          id= {movie.id}
          imageUrl={
            movie.poster_path
              ? getUrlPoserImage(movie.poster_path, 'w185')
              : defaultCardImage
          }
          key={movie.id}
        />
      ))}
    </div>
  )
}) as FC<MoviesListsType>