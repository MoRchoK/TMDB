import type { FC } from 'react'
import s from './titleMovieList.module.css'



export const TitleMovieList: FC<{title: string}> = ({title}) => {
  return (
      <h3 className={s.cardTitle}>{title}</h3>
  )
}