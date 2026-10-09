import s from './movieBanner.module.css'
import movieBanner from '../../../../assets/posterBanner.webp'
import { BaseButton } from '@/common/components/button/baseButton/BaseButton.tsx'
import { BaseInput } from '@/common/components/input/baseInput/BaseInput.tsx'


export const MovieBanner: React.FC = () => {

  return (
    <section className={s.movieBanner}>
      <img src={movieBanner} alt={'banner'} />
      <div className={s.infoWrapper}>
        <h2 className={s.title}>WELCOME</h2>
        <span className={s.description}>Browse highlighted titles from TMDB</span>
        <div className={s.searchWrapper}>
          <BaseInput/>
          <BaseButton title={'Search'}/>
        </div>
      </div>
    </section>
  )
}
