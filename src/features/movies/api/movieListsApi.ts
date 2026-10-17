import { baseApi } from '@/app/baseApi.ts'
import {
  baseMovieResponse, type creditsMovieParamsType,
  creditsMovieResponse, type detailsMovieParamsType, detailsMovieResponse,
  type discoverMoviesParamsType,
  type genreMovieParamsType,
  genreMovieResponse,
  type getPopularMoviesParamsType, type searchMovieParamsType, type similarMovieParamType,
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

    getDetailsMovies: build.query({
      query: ({movie_id, ...params }: detailsMovieParamsType) => ({
        url: `/movie/${movie_id}`,
        params
      }),
      responseSchema: detailsMovieResponse,
    }),

    getCreditsMovie: build.query({
      query: ({movie_id, ...params }: creditsMovieParamsType) => ({
        url: `/movie/${movie_id}/credits`,
        params
      }),
      responseSchema: creditsMovieResponse,
    }),
    getSimilarMovies: build.query({
      query: ({movie_id, ...params }: similarMovieParamType) => ({
        url: `/movie/${movie_id}/similar`,
        params
      }),
      responseSchema: baseMovieResponse,
    }),


  }),
})


export const {
  useGetCategoryMoviesQuery,
  useGetSimilarMoviesQuery,
  useGetCreditsMovieQuery,
  useGetDetailsMoviesQuery,
  useGetDiscoverMoviesQuery,
  useGetGenreMoviesQuery,
  useGetSearchMoviesQuery
} = movieListApi