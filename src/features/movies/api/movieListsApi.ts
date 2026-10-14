import { baseApi } from '@/app/baseApi.ts'
import {
  baseMovieResponse,
  type discoverMoviesParamsType,
  type genreMovieParamsType,
  genreMovieResponse,
  type getPopularMoviesParamsType,
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
  }),
})


export const {
  useGetCategoryMoviesQuery,
  useGetDiscoverMoviesQuery,
  useGetGenreMoviesQuery
} = movieListApi