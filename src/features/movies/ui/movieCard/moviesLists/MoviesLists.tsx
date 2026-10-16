import { MoviesListItem } from './moviesListItem'
import s from './moviesLists.module.css'
import { type FC, memo } from 'react'
import type { MoviesListsType } from './moviesListsType.ts'
import { getUrlPoserImage } from '@/common/utils/getUrlPosterImage.ts'
import { defaultCardImage, localStorageKeys } from '@/common/constants'
import { useLocalStorage } from '@/common/utils/useLocalStorage.ts'
import type { moviesDataType } from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'


export const MoviesLists = memo(({ moviesData, countCard = 5}) => {
  const [favoritesMovieData, setFavorites] = useLocalStorage<moviesDataType[]>(
    localStorageKeys.favoritesMovies,
    [],
  )

  const favoritesMoviesId = favoritesMovieData.map(movie=>movie.id)
  const handleLike = (movie: moviesDataType) => {
    setFavorites((current) => {
      const isAlreadyFavorite = current.some((item) => item.id === movie.id)
      return isAlreadyFavorite
        ? current.filter((item) => item.id !== movie.id)
        : [
          ...current,
          {
            id: movie.id,
            title: movie.title,
            vote_average: movie.vote_average,
            poster_path: movie.poster_path,
          },
        ]
    })
  }

const isLiked = (id:number)=> favoritesMoviesId?.includes(id)
  return (
    <div className={s.movieCardWrapper} style={{ gridTemplateColumns: `repeat(${countCard}, 1fr)` }}>
      {moviesData?.map((movie) => (
        <MoviesListItem
          isLiked = {isLiked(movie.id)}
          rating={Number(movie.vote_average.toFixed(1))}
          title={movie.title}
          onLikeHandler={() => handleLike(movie)}
          imageUrl={
            movie.poster_path
              ? getUrlPoserImage(movie.poster_path, 'w185')
              : defaultCardImage
          }
          key={movie.id}
        />
      ))}
    </div>
  )
}) as FC<MoviesListsType>