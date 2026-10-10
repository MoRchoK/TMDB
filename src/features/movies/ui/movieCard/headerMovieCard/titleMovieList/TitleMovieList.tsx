import type { FC } from 'react'
import s from './titleMovieList.module.css'



export const TitleMovieList: FC = () => {
  return (
      <h3 className={s.cardTitle}>Popular Movies</h3>
  )
}