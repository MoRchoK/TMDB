import { createBrowserRouter } from 'react-router'
import { App } from '@/App.tsx'
import { Path } from '@/common/constants'
import { CategoryPage } from '@/features/movies/ui/categoryPage/CategoryPage.tsx'
import { FilteredMoviesPage } from '@/features/movies/ui/filteredMoviesPage'
import { SearchPage } from '@/features/movies/ui/searchPage'
import { FavoritesPage } from '@/features/movies/ui/favoritesPage'
import { MainPage } from '@/features/movies/ui/mainPage/MainPage.tsx'





export  const router = createBrowserRouter([
  {
    path: Path.Main,
    element: <App/>,
    children: [
      { index: true, Component: MainPage },
      { path: Path.Movies, Component: CategoryPage,  children: [
          { index: true, Component: MainPage },

        ] },
      { path: Path.FilteredMovies, Component: FilteredMoviesPage },
      { path: Path.Search, Component: SearchPage },
      { path: Path.Favorites, Component: FavoritesPage },
    ]


  },



]);