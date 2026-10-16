import { localStorageKeys } from '@/common/constants'
import type { moviesDataType } from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'


export type onLikeHandler = {
  id: number
  title: string
  voteAverage: number
  poster_path: string | null | undefined
}

export const onLikeHandler = ({id, title, voteAverage, poster_path} : onLikeHandler) => {



  const favoritesMoviesData = localStorage.getItem(
    localStorageKeys.favoritesMovies,
  )
  const currentData: moviesDataType[] = favoritesMoviesData
    ? JSON.parse(favoritesMoviesData)
    : []

  const isAlreadyFavorite = currentData.some(
    (item) => item.id === id,
  )

  let updatedData: moviesDataType[]

  if (isAlreadyFavorite) {
    updatedData = currentData.filter((item) => item.id !== id)
  } else {
    updatedData = [
      ...currentData,
      {
        id: id,
        title: title,
        vote_average: voteAverage,
        poster_path: poster_path,
      },
    ]
  }
  localStorage.setItem(
    localStorageKeys.favoritesMovies,
    JSON.stringify(updatedData),
  )
}