import { baseApi } from '@/app/baseApi.ts'
import {
  baseMovieResponse,
  type discoverMoviesParamsType,
  type genreMovieParamsType,
  genreMovieResponse,
  type getPopularMoviesParamsType, type searchMovieParamsType,
} from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'


const movieListApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategoryMovies: build.query({
      query: ({ category, ...params }: getPopularMoviesParamsType) => ({
        url: `/movie/${category}`,
        params,
      }),
      responseSchema: baseMovieResponse,
    }),

    getDiscoverMovies: build.query({
      query: (params: discoverMoviesParamsType) => ({
        url: `/discover/movie`,
        params,
      }),
      responseSchema: baseMovieResponse,
    }),

    getGenreMovies: build.query({
      query: (params: genreMovieParamsType) => ({
        url: `/genre/movie/list`,
        params
      }),
      responseSchema: genreMovieResponse,
    }),

    getSearchMovies: build.query({
      query: (params: searchMovieParamsType) => ({
        url: `/search/movie`,
        params
      }),
      responseSchema: baseMovieResponse,
    }),


  }),
})


export const {
  useGetCategoryMoviesQuery,
  useGetDiscoverMoviesQuery,
  useGetGenreMoviesQuery,
  useGetSearchMoviesQuery
} = movieListApi