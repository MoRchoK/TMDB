import s from './searchResultsLayout.module.css'
import type { FC } from 'react'
import { RenderContent } from '@/features/movies/ui/searchPage/searchMovies/renderContent'
import type { SearchResultsLayoutType } from '@/features/movies/ui/searchPage/searchResultsLayout/searchResultsLayoutType.ts'



export const SearchResultsLayout: FC<SearchResultsLayoutType> = ({
                                                                   form,
                                                                   children,
                                                                   isResultData,
                                                                   description,
                                                                   isFetching,
                                                                 }) => {
  return (
    <section className={s.searchSectionContainer}>
      <h3 className={s.searchTitle}>Search Results</h3>
      {form}
      <RenderContent isResultData={isResultData}
                     isFetching={isFetching}
                     children={children}
                     description={description} />
    </section>
  )
}