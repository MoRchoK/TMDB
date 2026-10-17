import { localStorageKeys } from '@/common/constants'
import type { moviesDataType } from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'
import { CategoryContent } from '@/features/movies/ui/categoryPage/categoryContent'
import s from './favoritesPage.module.css'
import { useLocalStorage } from '@/common/utils/hooks/useLocalStorage.ts'


export const FavoritesPage = () => {
  const [favoritesMovieData] = useLocalStorage<moviesDataType[]>(
    localStorageKeys.favoritesMovies,
    [],
  )


  return (
    <section className={s.favoritesSectionContainer}>
      <h2>Favorites</h2>
      {favoritesMovieData.length?
      <CategoryContent
        isLoading={false}
        moviesData={favoritesMovieData}
        categoryTitle={'Favorite Movies'}
      />:
      <span>Add movies to favorites to see them on this page.</span>
      }
    </section>
  )
}