import type { CategoriesPath } from '@/common/constants'

export type categoriesMoviesType = {
  title: string
  path: CategoriesPath
}

export type CategoryContext = {
  page: number
  onChangePage: (page: number) => void
}
