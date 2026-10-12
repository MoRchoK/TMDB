import type { categoriesMoviesType } from '@/features/movies/ui/categoryPage/categoryPageType.ts'

export const Path = {
  Main: '/',
  Movies: '/movies',
  FilteredMovies: '/filtered-movies',
  Search: '/search',
  Favorites: '/favorites',
} as const;


export const pages  = [
  {title: 'Main', path: Path.Main},
  {title: 'Movies', path: Path.Movies},
  {title: 'Filtered Movies', path: Path.FilteredMovies},
  {title: 'Search', path: Path.Search},
  {title: 'Favorites', path: Path.Favorites},
] as const;


export type PathType = typeof Path;



export const categoriesPath = {
  PopularMovies: '/popular',
  TopRatedMovies: '/top-rated',
  UpcomingMovies: '/upcoming',
  NowPlayingMovies: '/now-playing',
} as const;

export type CategoriesPath = (typeof categoriesPath)[keyof typeof categoriesPath]


export const categoriesMovies: categoriesMoviesType[] = [
  { title: 'Popular Movies', path: '/popular' },
  { title: 'Top Rated Movies', path: '/top-rated'},
  { title: 'Upcoming Movies', path: '/upcoming' },
  { title: 'Now Playing Movies', path: '/now-playing' }]
