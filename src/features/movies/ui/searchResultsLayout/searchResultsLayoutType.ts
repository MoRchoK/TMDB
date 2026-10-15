import type { ReactNode } from 'react'


export type SearchResultsLayoutType = {
  children: ReactNode
  form?: ReactNode
  isFetching: boolean
  description: string | null
  isResultData: boolean
}