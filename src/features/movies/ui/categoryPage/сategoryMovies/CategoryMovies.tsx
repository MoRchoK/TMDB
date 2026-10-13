import type { FC } from 'react'
import { useParams } from 'react-router'
import { useChangePages } from '@/common/hooks/useChangePages.ts'
import { CategoryContent } from '@/features/movies/ui/categoryPage/categoryContent'
import { useGetCategoryMoviesQuery } from '../../../api/movieListsApi.ts'
import { categoriesPath, type CategoriesPath, categoryMoviesByPath } from '@/common/constants'


export const CategoryMovies: FC = () => {
  const { category } = useParams<{ category:CategoriesPath }>()
  const [page, onChangePage] = useChangePages()

  const path:CategoriesPath   = category || categoriesPath.PopularMovies
  const categoryTitle: string = category? categoryMoviesByPath[path].title : 'Popular Movies'
  const { data, isLoading, isFetching } = useGetCategoryMoviesQuery({ category:path, page })



  return (
    <CategoryContent
      onChangePage={onChangePage}
      isFetching={isFetching}
      isLoading={isLoading}
      moviesData={data}
      categoryTitle={categoryTitle }
    />
  )
}