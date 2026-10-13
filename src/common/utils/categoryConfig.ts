// import {
//   useGetNowPlayingMoviesQuery,
//   useGetPopularMoviesQuery,
//   useGetTopRatedMoviesQuery,
//   useGetUpcomingMoviesQuery,
// } from '@/features/movies/api/movieListsApi.ts'
// import { categoriesPath, nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } from '@/common/constants'
//
//
// export const categoryConfig = {
//   [popularMovies.path]: {
//     title: 'Popular',
//     useQuery: useGetPopularMoviesQuery,
//   },
//   [topRatedMovies.path]: {
//     title: 'Top Rated',
//     useQuery: useGetTopRatedMoviesQuery,
//   },
//   [upcomingMovies.path]: {
//     title: 'Upcoming',
//     useQuery: useGetUpcomingMoviesQuery,
//   },
//   [nowPlayingMovies.path]: {
//     title: 'Now Playing',
//     useQuery: useGetNowPlayingMoviesQuery,
//   },
// } as const