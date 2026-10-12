export const Path = {
  Main: '/',
  CategoryMovies: '/movies',
  FilteredMovies: '/filtered-movies',
  Search: '/search',
  Favorites: '/favorites',
} as const;


export const pages  = [
  {title: 'Main', path: Path.Main},
  {title: 'Category movies', path: Path.CategoryMovies},
  {title: 'Filtered Movies', path: Path.FilteredMovies},
  {title: 'Search', path: Path.Search},
  {title: 'Favorites', path: Path.Favorites},
] as const;


export type PathType = typeof Path;

export const popularMovies = { title: 'Popular Movies', path: '/popular' } as const
export const topRatedMovies = { title: 'Top Rated Movies', path: '/top-rated' } as const
export const upcomingMovies = { title: 'Upcoming Movies', path: '/upcoming' } as const
export const nowPlayingMovies = { title: 'Now Playing Movies', path: '/now-playing' } as const


export const categoriesPath = {
  PopularMovies: `${Path.CategoryMovies}${popularMovies.path}`,
  TopRatedMovies: `${Path.CategoryMovies}${topRatedMovies.path}`,
  UpcomingMovies: `${Path.CategoryMovies}${upcomingMovies.path}`,
  NowPlayingMovies: `${Path.CategoryMovies}${nowPlayingMovies.path}`,
} as const;

export type CategoriesPath = (typeof categoriesPath)[keyof typeof categoriesPath]


export const categoriesMovies = [
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  nowPlayingMovies] as const


export const RATING_STYLES = {
  low:    { bg: '#dc2626', color: '#fff' },
  medium: { bg: '#facc15', color: '#111827' },
  high:   { bg: '#16a34a', color: '#fff' },
} as const;