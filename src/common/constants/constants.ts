import type { categoriesMoviesType } from '@/features/movies/ui/categoryPage/categoryPageType.ts'

export const Path = {
  Main: '/',
  Movies: '/movies',
  FilteredMovies: '/filtered-movies',
  Search: '/search',
  Favorites: '/favorites',
} as const;

export type PathType = typeof Path;

export const categoriesMovies: categoriesMoviesType[] = [
  { title: 'Popular Movies', path: '/popular' },
  { title: 'Top Rated Movies', path: '/top-rated'},
  { title: 'Upcoming Movies', path: '/upcoming' },
  { title: 'Now Playing Movies', path: '/now-playing' }]
