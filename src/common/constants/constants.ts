import { getDefaultImage } from '@/common/utils/getDefaultImage.ts'


export const defaultBannerImage = getDefaultImage({width: 1200 , height: 720})
export const defaultCardImage = getDefaultImage({width: 360 , height: 720})



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



export const categoriesPath = {
  PopularMovies: `popular` ,
  TopRatedMovies: `top_rated`,
  UpcomingMovies: `upcoming`,
  NowPlayingMovies: `now_playing`,
} as const;



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
  low:    { bg: '#dc2626', color: '#fff' },
  medium: { bg: '#facc15', color: '#111827' },
  high:   { bg: '#16a34a', color: '#fff' },
} as const;