import { baseApi } from '@/app/baseApi.ts'
import {
  baseMovieResponse,
  type getPopularMoviesParamsType,
} from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'


const movieListApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategoryMovies: build.query({
      query: ({category,  ...params }: getPopularMoviesParamsType) => ({
        url: `/3/movie/${category}`,
        params
      }),
      responseSchema: baseMovieResponse,
    }),


  }),
})



export const {
  useGetCategoryMoviesQuery} = movieListApi