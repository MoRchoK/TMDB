import { baseApi } from '@/app/baseApi.ts'
import {
  baseMovieResponse,
  type getPopularMoviesParamsType,
} from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'


const movieListApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopularMovies: build.query({
      query: (params: getPopularMoviesParamsType) => ({
        url: '/3/movie/popular',
        params
      }),
      responseSchema: baseMovieResponse,
    }),
    getTopRatedMovies: build.query({
      query: (params: getPopularMoviesParamsType) => ({
        url: '/3/movie/top_rated',
        params
      }),
      responseSchema: baseMovieResponse,
    }),

    getUpcomingMovies: build.query({
      query: (params: getPopularMoviesParamsType) => ({
        url: '/3/movie/upcoming',
        params
      }),
      responseSchema: baseMovieResponse,
    }),

    getNowPlayingMovies: build.query({
      query: (params: getPopularMoviesParamsType) => ({
        url: '/3/movie/now_playing',
        params
      }),
      responseSchema: baseMovieResponse,
    }),
  }),
})



export const {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetUpcomingMoviesQuery} = movieListApi