import { createBrowserRouter, Navigate } from 'react-router'
import { App } from '@/App.tsx'
import { categoriesPath, Path } from '@/common/constants'
import { CategoryPage } from '@/features/movies/ui/categoryPage/CategoryPage.tsx'
import { FilteredMoviesPage } from '@/features/movies/ui/filteredMoviesPage'
import { SearchPage } from '@/features/movies/ui/searchPage'
import { FavoritesPage } from '@/features/movies/ui/favoritesPage'
import { MainPage } from '@/features/movies/ui/mainPage/MainPage.tsx'
import { PopularMovies } from '@/features/movies/ui/categoryPage/popularMovies/PopularMovies.tsx'
import { TopRatedMovies } from '@/features/movies/ui/categoryPage/topRatedMovies/TopRatedMovies.tsx'
import { UpcomingMovies } from '@/features/movies/ui/categoryPage/upcomingMovies'
import { NowPlayingMovies } from '@/features/movies/ui/categoryPage/nowPlayingMovies'


export const router = createBrowserRouter([
  {
    path: Path.Main,
    element: <App />,
    children: [
      { index: true, Component: MainPage },
      {
        path: Path.CategoryMovies, Component: CategoryPage, children: [
          { index: true, element: <Navigate to={categoriesPath.PopularMovies} /> },
          { path: categoriesPath.PopularMovies, Component: PopularMovies },
          { path: categoriesPath.TopRatedMovies, Component: TopRatedMovies },
          { path: categoriesPath.UpcomingMovies, Component: UpcomingMovies },
          { path: categoriesPath.NowPlayingMovies, Component: NowPlayingMovies },

        ],
      },
      { path: Path.FilteredMovies, Component: FilteredMoviesPage },
      { path: Path.Search, Component: SearchPage },
      { path: Path.Favorites, Component: FavoritesPage },
    ],


  },


])