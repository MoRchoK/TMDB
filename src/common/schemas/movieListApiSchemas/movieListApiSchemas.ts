import * as z from "zod";



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
  vote_count: z.int()
})

export const baseMovieResponse = z.object({
  page: z.int(),
  results: z.array(baseResultsMovieResponse),
  total_pages: z.int(),
  total_results: z.int()
});

export const getPopularMoviesParams = z.object({
  language: z.string().optional(),
  page: z.int32().optional(),
  region: z.string().optional(),
  category: z.string()
})




export type baseMovieResponseType = z.infer<typeof baseMovieResponse>;
export type baseResultsMovieResponseType = z.infer<typeof baseResultsMovieResponse>;
export type getPopularMoviesParamsType = z.infer<typeof getPopularMoviesParams>;