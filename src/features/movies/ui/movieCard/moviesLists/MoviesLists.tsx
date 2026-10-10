import { MoviesListItem } from "./moviesListItem"
import s from './moviesLists.module.css'
import type { FC } from 'react'
import type { MoviesListsType } from './moviesListsType.ts'


export const MoviesLists: FC<MoviesListsType> = ({moviesData}) => {

  return (
    <div className={s.movieCardWrapper}>
      {moviesData.map(() => (<MoviesListItem />
      ))}
    </div>
  )
}