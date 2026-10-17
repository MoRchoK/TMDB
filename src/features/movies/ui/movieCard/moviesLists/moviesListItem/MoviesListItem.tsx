import s from './moviesListItem.module.css'
import { type FC, memo } from 'react'
import type { MoviesListItemType } from './moviesListItem.ts'
import { localStorageKeys, Path, RATING_STYLES } from '@/common/constants'
import { useNavigate } from 'react-router'
import type { moviesDataType } from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'
import { useLocalStorage } from '@/common/utils/hooks/useLocalStorage.ts'


export const MoviesListItem = memo(({
                                      title,
                                      imageUrl,
                                      rating,
                                      id,
                                    }) => {

  const navigate = useNavigate()
  const [favoritesMovieData, setFavorites] = useLocalStorage<moviesDataType[]>(
    localStorageKeys.favoritesMovies,
    [],
  )

  const favoritesMoviesId = favoritesMovieData.map(movie=>movie.id)
  const isLiked = ()=> favoritesMoviesId?.includes(id)
  const threshold = rating < 5 ? 'low' : rating < 7 ? 'medium' : 'high'
  const { bg, color } = RATING_STYLES[threshold]
  const ratingValue = Number.isInteger(rating) ? rating.toFixed(1) : rating

  const onCardHandler = () => {
    navigate(`${Path.Movie}/${id}`)
  }
  const handleLike = () => {
    setFavorites((current) => {
      const isAlreadyFavorite = current.some((item) => item.id === id)
      return isAlreadyFavorite
        ? current.filter((item) => item.id !== id)
        : [
          ...current,
          {
            id: id,
            title: title,
            vote_average: rating,
            poster_path: imageUrl,
          },
        ]
    })
  }
  return (
    <div className={s.cardItemWrapper} >
      <div className={s.cardImageWrapper} >
        <span className={s.ratingCard} style={{ backgroundColor: bg, color: color }}>{ratingValue}</span>
        <img src={imageUrl} alt={'Movie Poster'} className={s.cardImage} onClick={onCardHandler} />
        <div className={s.likeIconWrapper} onClick={handleLike}>
          <svg className={`${s.likeIcon} ${isLiked() && s.liked}`} width={20} height={20}>
            <use href={`${import.meta.env.BASE_URL}iconsSprites.svg#like`} />
          </svg>
        </div>
      </div>
      <span className={s.movieTitle} onClick={onCardHandler}>{title}</span>
    </div>
  )
}) as FC<MoviesListItemType>