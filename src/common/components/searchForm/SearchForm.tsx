import s from '@/features/movies/ui/mainPage/movieBanner/movieBanner.module.css'

import { BaseButton } from '@/common/components/button/baseButton'
import type { FC } from 'react'
import { BaseInput } from './baseInput/BaseInput.tsx'



export const SearchForm: FC = ()=>{
  return (
    <div className={s.searchWrapper}>
      <BaseInput/>
      <BaseButton title={'Search'} mode={'accent'}/>
    </div>
  )
}