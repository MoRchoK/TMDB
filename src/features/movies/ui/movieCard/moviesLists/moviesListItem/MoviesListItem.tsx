import s from './moviesListItem.module.css'
import movieCard from '@/assets/movieCard.jpg'

export const MoviesListItem = () => {

  return (
    <>
      <div className={s.cardItemWrapper}>
        <div className={s.cardImageWrapper}>
          <img src={movieCard} alt={'movieCard'} className={s.cardImage} />
          <div className={s.likeIconWrapper}>
            <svg className={s.likeIcon} width={20} height={20}>
              <use href="/iconsSprites.svg#like" />
            </svg>
          </div>
        </div>
        <span className={s.movieTitle}>Spider-Man: Brand New Day</span>
      </div>
    </>

  )
}