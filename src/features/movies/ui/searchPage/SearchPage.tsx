import {type FC} from 'react'
import {SearchForm} from '@/common/components/searchForm'
import {SearchResultsLayout} from './searchResultsLayout'
import {useGetSearchMoviesQuery} from '@/features/movies/api/movieListsApi.ts'
import {Outlet, useNavigate, useParams} from 'react-router'
import {Path} from '@/common/constants'


export const SearchPage: FC = () => {
    const params = useParams()
    const navigate = useNavigate()
    const {data, isFetching} = useGetSearchMoviesQuery({query: params.search || '' }, { skip: !params.search })

    const resetParamsHandler = () => {
        navigate(Path.Search)
    }
    const isResultsData = !!data?.results.length && data?.total_results > 0

    return (
        <SearchResultsLayout description={params.search || null}
                             isResultData={isResultsData}
                             isFetching={isFetching}
                             form={<SearchForm defaultSearchValue={params.search}
                                               resetSearchHandler={resetParamsHandler}/>}>
            <Outlet />
        </SearchResultsLayout>
    )
}

