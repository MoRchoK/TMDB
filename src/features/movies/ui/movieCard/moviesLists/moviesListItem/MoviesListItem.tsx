import s from './moviesListItem.module.css'
import { type FC, memo } from 'react'
import type { MoviesListItemType } from './moviesListItem.ts'
import { RATING_STYLES } from '@/common/constants'


export const MoviesListItem  = memo(({title, imageUrl, rating}) => {
  const threshold = rating < 5 ? 'low' : rating < 7 ? 'medium' : 'high';
  const { bg, color } = RATING_STYLES[threshold];
  const ratingValue = Number.isInteger(rating)? rating.toFixed(1): rating

  return (
      <div className={s.cardItemWrapper}>
        <div className={s.cardImageWrapper}>
          <span className={s.ratingCard} style={{backgroundColor: bg, color: color}}>{ratingValue}</span>
          <img src={imageUrl } alt={'Movie Poster'} className={s.cardImage} />
          <div className={s.likeIconWrapper}>
            <svg className={s.likeIcon} width={20} height={20}>
              <use href="/iconsSprites.svg#like" />
            </svg>
          </div>
        </div>
        <span className={s.movieTitle}>{title}</span>
      </div>
  )
}) as FC<MoviesListItemType>