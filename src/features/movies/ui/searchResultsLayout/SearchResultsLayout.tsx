import s from './searchResultsLayout.module.css'
import type { FC } from 'react'
import type { SearchResultsLayoutType } from '@/features/movies/ui/searchResultsLayout/searchResultsLayoutType.ts'


export const SearchResultsLayout: FC<SearchResultsLayoutType> = ({
                                                                   form,
                                                                   children,
                                                                   isResultData,
                                                                   description,
                                                                   isFetching,


                                                                 }) => {
  if (isFetching) return

  return (<section className={s.searchSectionContainer}>
    <h3 className={s.searchTitle}>Search Results</h3>
    {form}

    {!description && !isResultData &&
      <span className={s.searchDescription}>Enter a movie title to start searching.</span>}
    {!isResultData && description &&
      <span className={s.searchDescription}>{`No matches found for "${description}"`}</span>}
    {children}


  </section>)
}