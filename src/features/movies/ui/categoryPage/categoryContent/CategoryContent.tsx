import type { FC } from 'react'
import { TitleMovieList } from '@/features/movies/ui/movieCard/headerMovieCard/titleMovieList/TitleMovieList.tsx'
import { MoviesLists } from '@/features/movies/ui/movieCard/moviesLists'
import s from './сategoryContent.module.css'




export const CategoryContent: FC = () => {

  const moviesData = Array(12).fill(null)

  return (
      <div className={s.categoryContent}>
        <TitleMovieList />
        <MoviesLists moviesData={moviesData}/>
      </div>
  )
}