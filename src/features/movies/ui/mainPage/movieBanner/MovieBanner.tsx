import s from './movieBanner.module.css'
import movieBanner from '../../../../../assets/posterBanner.webp'
import { SearchForm } from '@/common/components/searchForm'





export const MovieBanner: React.FC = () => {

  return (
    <section className={s.movieBanner}>
      <img src={movieBanner} alt={'banner'} />
      <div className={s.infoWrapper}>
        <h2 className={s.title}>WELCOME</h2>
        <span className={s.description}>Browse highlighted titles from TMDB</span>
        <SearchForm/>
      </div>
    </section>
  )
}
