import { BaseButton } from '@/common/components/button/baseButton'
import type { FC } from 'react'
import s from './headerMovieCard.module.css'
import { TitleMovieList } from '@/features/movies/ui/movieCard/headerMovieCard/titleMovieList/TitleMovieList.tsx'

export const HeaderMovieCard: FC = () => {

  return (
      <div className={s.titleCardWrapper}>
       <TitleMovieList/>
        <BaseButton title={'View more'} mode={'base'} />
      </div>
  )
}