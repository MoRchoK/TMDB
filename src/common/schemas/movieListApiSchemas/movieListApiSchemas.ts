import * as z from 'zod'
import { SortMovie } from '@/features/movies/api'


const baseResultsMovieResponse = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullish(),
  genre_ids: z.array(z.int()),
  id: z.int(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullish(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.int(),
})

export const baseMovieResponse = z.object({
  page: z.int(),
  results: z.array(baseResultsMovieResponse),
  total_pages: z.int(),
  total_results: z.int(),
})

const genre = z.object({
  id: z.int().nonnegative(),
  name: z.string(),})


export const genreMovieResponse = z.object({
  genres: z.array(genre),
})


export const genreMovieParams = z.object({
  language: z.string().optional(),
})


export const getPopularMoviesParams = z.object({
  language: z.string().optional(),
  page: z.int32().optional(),
  region: z.string().optional(),
  category: z.string(),
})


export const discoverMoviesParams = z.object({
  certification: z.string().optional(),
  ['certification.gte']: z.string().optional(),
  ['certification.lte']: z.string().optional(),
  certification_country: z.string().optional(),
  include_adult: z.boolean().optional(),
  include_video: z.boolean().optional(),
  language: z.string().optional(),
  page: z.int32().optional(),
  primary_release_year: z.int32().optional(),
  ['primary_release_date.gte']: z.date().optional(),
  ['primary_release_date.lte']: z.date().optional(),
  region: z.int32().optional(),
  ['release_date.lte']: z.date().optional(),
  sort_by: z.enum(SortMovie).optional(),
  vote_average: z.float32().optional(),
  ['vote_average.lte']: z.float32().optional(),
  ['vote_average.gte']: z.float32().optional(),
  ['vote_count.gte']: z.float32().optional(),
  ['vote_count.lte']: z.float32().optional(),
  watch_region: z.string().optional(),
  with_companies: z.string().optional(),
  with_crew: z.string().optional(),
  with_genres: z.string().optional(),
  with_keywords: z.string().optional(),
  with_origin_country: z.string().optional(),
  with_original_language: z.string().optional(),
  with_people: z.string().optional(),
  with_release_type: z.int32().optional(),
  ['with_runtime.gte']: z.int32().optional(),
  ['with_runtime.lte']: z.int32().optional(),
  with_watch_monetization_types: z.string().optional(),
  with_watch_providers: z.string().optional(),
  without_companies: z.string().optional(),
  without_genres: z.string().optional(),
  without_keywords: z.string().optional(),
  without_watch_providers: z.string().optional(),
  year: z.int32().optional(),
})

export const searchMovieParams = z.object({
  query: z.string(),
  include_adult: z.boolean().optional(),
  language: z.string().optional(),
  primary_release_year: z.string().optional(),
  page: z.int32().optional(),
  region: z.string().optional(),
  year: z.string().optional(),
})


export type searchMovieParamsType = z.infer<typeof searchMovieParams>;
export type baseMovieResponseType = z.infer<typeof baseMovieResponse>;
export type discoverMoviesParamsType = z.infer<typeof discoverMoviesParams>;
export type baseResultsMovieResponseType = z.infer<typeof baseResultsMovieResponse>;
export type getPopularMoviesParamsType = z.infer<typeof getPopularMoviesParams>;
export type genreMovieResponseType = z.infer<typeof genreMovieResponse>;
export type genreMovieParamsType = z.infer<typeof genreMovieParams>;
export type genreType = z.infer<typeof genre>;