import s from './searchResultsLayout.module.css'
import type { FC } from 'react'
import type { SearchResultsLayoutType } from '@/features/movies/ui/searchResultsLayout/searchResultsLayoutType.ts'



export const SearchResultsLayout: FC<SearchResultsLayoutType> = ({ form, children }) => (
  <section className={s.searchSectionContainer}>
    <h3 className={s.searchTitle}>Search Results</h3>
    {form}
    <span className={s.searchDescription}>Enter a movie title to start searching.</span>
    {children}
  </section>
)