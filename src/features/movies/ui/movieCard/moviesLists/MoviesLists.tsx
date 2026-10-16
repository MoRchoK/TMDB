import { MoviesListItem } from "./moviesListItem"
import s from './moviesLists.module.css'
import { type FC, memo } from 'react'
import type { MoviesListsType } from './moviesListsType.ts'
import { getUrlPoserImage } from '@/common/utils/getUrlPosterImage.ts'
import { defaultCardImage } from '@/common/constants'
import type { moviesDataType } from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'


export const MoviesLists = memo(({moviesData, countCard = 5 }) => {

  return (
    <div
      className={s.movieCardWrapper}
      style={{ gridTemplateColumns: `repeat(${countCard}, 1fr)` }}
    >
      {moviesData.map((movie) => {
        const onLikeHandler = () => {
          const favoritesMoviesData: moviesDataType[] = JSON.parse(
            localStorage.getItem('favoritesMovies') || '[]'
          );
          const resultData = favoritesMoviesData.filter(
            (item) => item.id !== movie.id
          );
          if (favoritesMoviesData.length !== resultData.length) {
            localStorage.setItem(
              'favoritesMovies',
              JSON.stringify([
                ...favoritesMoviesData,
                {
                  id: movie.id,
                  title: movie.title,
                  vote_average: movie.vote_average,
                  backdrop_path: movie.backdrop_path,
                },
              ])
            );
          }else {
            localStorage.setItem('favoritesMovies', JSON.stringify(resultData))
          }
        };

        return (
          <MoviesListItem
            rating={Number(movie.vote_average.toFixed(1))}
            title={movie.title}
            onLikeHandler={onLikeHandler}
            imageUrl={
              movie.poster_path
                ? getUrlPoserImage(movie.poster_path, 'w185')
                : defaultCardImage
            }
            key={movie.id}
          />
        );
      })}
    </div>
  );
}) as FC<MoviesListsType>;