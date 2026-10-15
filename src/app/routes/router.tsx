import { createBrowserRouter, Navigate } from 'react-router'
import { App } from '@/App.tsx'
import { categoriesPath, Path } from '@/common/constants'
import { CategoryPage } from '@/features/movies/ui/categoryPage/CategoryPage.tsx'
import { FilteredMoviesPage } from '@/features/movies/ui/filteredMoviesPage'
import { SearchPage } from '@/features/movies/ui/searchPage'
import { FavoritesPage } from '@/features/movies/ui/favoritesPage'
import { MainPage } from '@/features/movies/ui/mainPage/MainPage.tsx'
import { CategoryMovies } from '@/features/movies/ui/categoryPage/сategoryMovies/CategoryMovies.tsx'


export const router = createBrowserRouter([
  {
    path: Path.Main,
    element: <App />,
    children: [
      { index: true, Component: MainPage },
      {
        path: Path.CategoryMovies,
        Component: CategoryPage,
        children: [
          { index: true, element: <Navigate to={`./${categoriesPath.PopularMovies}`} replace/> },
          { path: ':category', Component: CategoryMovies },
        ],
      },
      { path: Path.FilteredMovies, Component: FilteredMoviesPage },
      { path: Path.Search,
        Component: SearchPage,
        children:[
          { path: ':search', Component: CategoryMovies },
        ] },
      { path: Path.Favorites, Component: FavoritesPage },
    ],


  },


])