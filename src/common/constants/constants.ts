import { getDefaultImage } from '@/common/utils/getDefaultImage.ts'

import { SortMovie, type sortMoviesParamsType } from '@/features/movies/api'


export const defaultBannerImage = getDefaultImage({ width: 1200, height: 720 })
export const defaultCardImage = getDefaultImage({ width: 360, height: 720 })

export const localStorageKeys = {
  favoritesMovies: 'favoritesMovies',
  themeMode: 'themeMode'
} as const


export const sortMoviesParams: sortMoviesParamsType[] = [
  {
    title: 'По популярности 🠓',
    sortTag: SortMovie.popularityDesc,
  },
  {
    title: 'По популярности 🠑',
    sortTag: SortMovie.popularityAsc,
  },
  {
    title: 'По рейтингу 🠓',
    sortTag: SortMovie.voteAverageDesc,
  },
  {
    title: 'По рейтингу 🠑',
    sortTag: SortMovie.voteAverageAsc,
  },
  {
    title: 'По дате выпуска 🠓',
    sortTag: SortMovie.primaryReleaseDateDesc,
  },
  {
    title: 'По дате выпуска 🠑',
    sortTag: SortMovie.primaryReleaseDateAsc,
  },

  {
    title: 'По названию (А-Я)',
    sortTag: SortMovie.originalTitleAsc,
  },
  {
    title: 'По названию (Я-А)',
    sortTag: SortMovie.originalTitleDesc,
  },

]

export const Path = {
  Main: '/',
  CategoryMovies: '/movies',
  FilteredMovies: '/filtered-movies',
  Search: '/search',
  Favorites: '/favorites',
  Movie: '/movie',
  Error: '*',
} as const


export const pages = [
  { title: 'Main', path: Path.Main },
  { title: 'Category movies', path: Path.CategoryMovies },
  { title: 'Filtered Movies', path: Path.FilteredMovies },
  { title: 'Search', path: Path.Search },
  { title: 'Favorites', path: Path.Favorites },
] as const


export const categoriesPath = {
  PopularMovies: `popular`,
  TopRatedMovies: `top_rated`,
  UpcomingMovies: `upcoming`,
  NowPlayingMovies: `now_playing`,
} as const


export const popularMovies = { title: 'Popular Movies', path: `/${categoriesPath.PopularMovies}` } as const
export const topRatedMovies = { title: 'Top Rated Movies', path: `/${categoriesPath.TopRatedMovies}` } as const
export const upcomingMovies = { title: 'Upcoming Movies', path: `/${categoriesPath.UpcomingMovies}` } as const
export const nowPlayingMovies = { title: 'Now Playing Movies', path: `/${categoriesPath.NowPlayingMovies}` } as const


export type CategoriesPath = (typeof categoriesPath)[keyof typeof categoriesPath]


export const categoryMoviesByPath = {
  [categoriesPath.PopularMovies]: popularMovies,
  [categoriesPath.TopRatedMovies]: topRatedMovies,
  [categoriesPath.UpcomingMovies]: upcomingMovies,
  [categoriesPath.NowPlayingMovies]: nowPlayingMovies,


}

export const categoriesMovies = [
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  nowPlayingMovies] as const


export const RATING_STYLES = {
  low: { bg: '#dc2626', color: '#fff' },
  medium: { bg: '#facc15', color: '#111827' },
  high: { bg: '#16a34a', color: '#fff' },
} as const