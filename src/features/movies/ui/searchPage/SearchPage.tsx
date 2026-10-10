import type { FC } from 'react'
import { SearchForm } from '@/common/components/searchForm'
import { CategoryContent } from '@/features/movies/ui/categoryPage/categoryContent'
import { SearchResultsLayout } from '../searchResultsLayout'


export const SearchPage: FC = () => {

  return (
    <SearchResultsLayout form={<SearchForm />}>
      <CategoryContent />
    </SearchResultsLayout>
  )
}