import s from './movieBanner.module.css'
import { SearchForm } from '@/common/components/searchForm'
import type { MovieBannerType } from './movieBannerType.ts'
import type { FC } from 'react'





export const MovieBanner: FC<MovieBannerType> = ({urlImage}) => {

  return (
    <section className={s.movieBanner} >
      <div  className={s.movieBannerImage} style={{backgroundImage:`url(${urlImage}), linear-gradient(rgba(4, 21, 45, 0) 0%, rgb(18, 18, 18) 79.17%)` }}/>
      <div className={s.infoWrapper}>
        <h2 className={s.title}>WELCOME</h2>
        <span className={s.description}>Browse highlighted titles from TMDB</span>
        <SearchForm/>
      </div>
    </section>
  )
}
