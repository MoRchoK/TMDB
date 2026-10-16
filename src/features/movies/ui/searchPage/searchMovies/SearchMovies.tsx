import type { FC } from 'react'
import { CategoryContent } from '@/features/movies/ui/categoryPage/categoryContent'
import { useParams } from 'react-router'
import { useGetSearchMoviesQuery } from '@/features/movies/api/movieListsApi.ts'
import { getCategoryMoviesData } from '@/common/utils/getCategoryMoviesData.ts'


export const SearchMovies: FC = () => {
  const params = useParams()
  const { data, isLoading } = useGetSearchMoviesQuery({ query: params.search || '' })
  const categoryMoviesData = getCategoryMoviesData(data?.results)
  const isResultsData = !!data?.results.length && data?.total_results > 0



  return (
    <CategoryContent moviesData={categoryMoviesData}
                     totalPages={data?.total_pages}
                     page={data?.page}
                     categoryTitle={isResultsData ? `Results for "${params.search}"` : null}
                     isLoading={isLoading} />
  )


}