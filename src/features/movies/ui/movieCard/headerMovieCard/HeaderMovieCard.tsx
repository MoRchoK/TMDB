import { BaseButton } from '@/common/components/button/baseButton'
import { type FC, memo } from 'react'
import s from './headerMovieCard.module.css'
import { TitleMovieList } from '@/features/movies/ui/movieCard/headerMovieCard/titleMovieList/TitleMovieList.tsx'
import type { HeaderMovieCardType } from '@/features/movies/ui/movieCard/headerMovieCard/headerMovieCardType.ts'


export const HeaderMovieCard: FC<HeaderMovieCardType> = memo(({ categoryTitle, buttonTitle, redirectPath }) => {
  return (
    <div className={s.titleCardWrapper}>
      <TitleMovieList title={categoryTitle} />
      <BaseButton title={buttonTitle}
                  redirectPath={redirectPath} />
    </div>
  )
})

