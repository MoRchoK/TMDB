import { createHashRouter, Navigate } from 'react-router'
import { App } from '@/App.tsx'
import { categoriesPath, Path } from '@/common/constants'
import { ErrorPage } from '@/common/components/errorPage'


export const router = createHashRouter([
  {
    path: Path.Main,
    element: <App />,
    HydrateFallback: () => null,
    children: [
      {
        index: true,
        lazy: () => import('@/features/movies/ui/mainPage/MainPage.tsx').then(m => ({ Component: m.MainPage })),
      },
      {
        path: Path.CategoryMovies,
        lazy: () => import('@/features/movies/ui/categoryPage/CategoryPage.tsx').then(m => ({ Component: m.CategoryPage })),
        children: [
          { index: true, element: <Navigate to={`./${categoriesPath.PopularMovies}`} replace /> },
          {
            path: ':category',
            lazy: () => import('@/features/movies/ui/categoryPage/categoryMovies/CategoryMovies.tsx').then(m => ({ Component: m.CategoryMovies })),
          },
        ],
      },
      {
        path: Path.FilteredMovies,
        lazy: () => import('@/features/movies/ui/filteredMoviesPage').then(m => ({ Component: m.FilteredMoviesPage })),
      },
      {
        path: Path.Search,
        lazy: () => import('@/features/movies/ui/searchPage').then(m => ({ Component: m.SearchPage })),
        children: [
          {
            path: ':search',
            lazy: () => import('@/features/movies/ui/searchPage/searchMovies').then(m => ({ Component: m.SearchMovies })),
          },
        ],
      },
      {
        path: Path.Favorites,
        lazy: () => import('@/features/movies/ui/favoritesPage').then(m => ({ Component: m.FavoritesPage })),
      },
      {
        path: `${Path.Movie}/:movieId`,
        lazy: () => import('@/features/movies/ui/movieDetails/MovieDetailsPage.tsx').then(m => ({ Component: m.MovieDetailsPage })),
      }],
  },
  {
    path: Path.Error,
    element: <ErrorPage />,
  },

])
