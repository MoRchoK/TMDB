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
  name: z.string(),
})


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
export const detailsMovieParams = z.object({
  movie_id: z.string(),
  append_to_response: z.string().optional(),
  language: z.string().optional(),
})
export const similarMovieParams = z.object({
  movie_id: z.string(),
  page: z.int().optional(),
  language: z.string().optional(),
})


export const creditsMovieParams = z.object({
  movie_id: z.string(),
  language: z.string().optional(),
})


const cast = z.object({
  adult: z.boolean().nullable(),
  gender: z.int().nullable(),
  id: z.int(),
  known_for_department: z.string().nullable(),
  name: z.string().optional().nullable(),
  original_name: z.string().nullable(),
  popularity: z.number().nullable(),
  profile_path: z.string().nullable(),
  credit_id: z.string().nullable(),
  cast_id: z.int().nullable(),
  character: z.string().nullable(),
  order: z.int(),
})
const crew = z.object({
  adult: z.boolean(),
  gender: z.int().optional(),
  id: z.int(),
  known_for_department: z.string().nullable(),
  name: z.string(),
  original_name: z.string().nullable(),
  popularity: z.number(),
  profile_path: z.string().nullable(),
  credit_id: z.string().nullable(),
  department: z.string().nullable(),
  job: z.string(),
})
export const creditsMovieResponse = z.object({
  id: z.int(),
  cast: z.array(cast),
  crew: z.array(crew),

})
export const detailsMovieResponse = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullish(),
  belongs_to_collection: z.object({
    id: z.int(),
    name: z.string().nullable(),
    poster_path: z.string().nullish(),
    backdrop_path: z.string().nullish(),
  }).nullable(),
  budget: z.int(),
  genres: z.array(genre),
  homepage: z.string().nullable(),
  id: z.int(),
  imdb_i: z.string().nullish(),
  origin_country: z.array(z.string().nullable()),
  original_language: z.string().nullable(),
  original_title: z.string().nullable(),
  overview: z.string().nullable(),
  popularity: z.number(),
  poster_path: z.string().nullish(),
  production_companies: z.array(z.object({
    id: z.int(),
    logo_path: z.string().nullish(),
    name: z.string().nullable(),
    origin_country: z.string().nullable(),
  })),

  production_countries: z.array(z.object({
    iso_3166_1: z.string().nullable(),
    name: z.string().nullable(),
  })),
  release_date: z.string().nullable(),
  revenue: z.int(),
  runtime: z.int(),
  spoken_languages: z.array(z.object({
    english_name: z.string().nullable(),
    iso_639_1: z.string().nullable(),
    name: z.string().nullable(),
  })),
  status: z.string().nullable(),
  tagline: z.string().nullable(),
  title: z.string().nullable(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.int(),
})

export const moviesData = z.object({
  id: z.int(),
  title: z.string(),
  vote_average: z.number(),
  poster_path: z.string().nullish(),
  backdrop_path: z.string().nullish(),

})




export type similarMovieParamType = z.infer<typeof similarMovieParams>;
export type creditsMovieParamsType = z.infer<typeof creditsMovieParams>;
export type castType = z.infer<typeof cast>;
export type moviesDataType = z.infer<typeof moviesData>;
export type detailsMovieResponseType = z.infer<typeof detailsMovieResponse>;
export type detailsMovieParamsType = z.infer<typeof detailsMovieParams>;
export type searchMovieParamsType = z.infer<typeof searchMovieParams>;
export type baseMovieResponseType = z.infer<typeof baseMovieResponse>;
export type discoverMoviesParamsType = z.infer<typeof discoverMoviesParams>;
export type baseResultsMovieResponseType = z.infer<typeof baseResultsMovieResponse>;
export type getPopularMoviesParamsType = z.infer<typeof getPopularMoviesParams>;
export type genreMovieResponseType = z.infer<typeof genreMovieResponse>;
export type genreMovieParamsType = z.infer<typeof genreMovieParams>;
export type genreType = z.infer<typeof genre>;