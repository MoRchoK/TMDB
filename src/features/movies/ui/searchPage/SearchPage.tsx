import { type FC } from 'react'
import { SearchForm } from '@/common/components/searchForm'
import { CategoryContent } from '@/features/movies/ui/categoryPage/categoryContent'
import { SearchResultsLayout } from '../searchResultsLayout'
import { useGetSearchMoviesQuery } from '@/features/movies/api/movieListsApi.ts'
import { useNavigate, useParams } from 'react-router'
import { Path } from '@/common/constants'

export const SearchPage: FC = () => {
  const params = useParams()
  const navigate = useNavigate()

  const { data, isLoading, isFetching } = useGetSearchMoviesQuery({ query: params.search || '' })

  const resetParamsHandler = () => {
    navigate(Path.Search)
  }

  const isResultsData = !!data?.total_results && data?.total_results>0

  return (
    <SearchResultsLayout description={params.search || null}
                         isResultData = {isResultsData}
                         isFetching={isFetching}
                         form={<SearchForm defaultSearchValue={params.search}
                                           resetSearchHandler={resetParamsHandler} />}>
      <CategoryContent moviesData={data}
                       categoryTitle={ isResultsData? `Results for "${params.search}"` : null}
                       isLoading={isLoading} />


    </SearchResultsLayout>
  )
}

