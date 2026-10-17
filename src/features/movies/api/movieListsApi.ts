import { baseApi } from '@/app/api/baseApi.ts'
import {
  baseMovieResponse, type creditsMovieParamsType,
  creditsMovieResponse, type detailsMovieParamsType, detailsMovieResponse,
  type discoverMoviesParamsType,
  type genreMovieParamsType,
  genreMovieResponse,
  type getPopularMoviesParamsType, type searchMovieParamsType, type similarMovieParamType,
} from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'
import { withZodCatch } from '@/common/utils/withZodCatch.ts'


export const movieListApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategoryMovies: build.query({
      query: ({ category, ...params }: getPopularMoviesParamsType) => ({
        url: `/movie/${category}`,
        params,
      }),
      keepUnusedDataFor: 0,
      responseSchema: baseMovieResponse,
    }),

    getDiscoverMovies: build.query({
      query: (params: discoverMoviesParamsType) => ({
        url: `/discover/movie`,
        params,
      }),
      ...withZodCatch(baseMovieResponse),
      keepUnusedDataFor: 0,
      responseSchema: baseMovieResponse,
    }),

    getGenreMovies: build.query({

      query: (params: genreMovieParamsType) => ({
        url: `/genre/movie/list`,
        params
      }),
      ...withZodCatch(genreMovieResponse),
      keepUnusedDataFor: 0,
      responseSchema: genreMovieResponse,
    }),

    getSearchMovies: build.query({
      query: (params: searchMovieParamsType) => ({
        url: `/search/movie`,
        params
      }),
      ...withZodCatch(baseMovieResponse),
      keepUnusedDataFor: 0,
      responseSchema: baseMovieResponse,
    }),

    getDetailsMovies: build.query({
      query: ({movie_id, ...params }: detailsMovieParamsType) => ({
        url: `/movie/${movie_id}`,
        params
      }),
      ...withZodCatch(detailsMovieResponse),
      keepUnusedDataFor: 0,
      responseSchema: detailsMovieResponse,
    }),

    getCreditsMovie: build.query({
      query: ({movie_id, ...params }: creditsMovieParamsType) => ({
        url: `/movie/${movie_id}/credits`,
        params
      }),
      ...withZodCatch(genreMovieResponse),
      keepUnusedDataFor: 0,
      responseSchema: creditsMovieResponse,
    }),
    getSimilarMovies: build.query({
      query: ({movie_id, ...params }: similarMovieParamType) => ({
        url: `/movie/${movie_id}/similar`,
        params
      }),
      ...withZodCatch(genreMovieResponse),
      keepUnusedDataFor: 0,
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