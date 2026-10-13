import type { FC } from 'react'
import { useOutletContext, useParams } from 'react-router'
import { CategoryContent } from '@/features/movies/ui/categoryPage/categoryContent'
import { useGetCategoryMoviesQuery } from '../../../api/movieListsApi.ts'
import { categoriesPath, type CategoriesPath, categoryMoviesByPath } from '@/common/constants'
import type { CategoryContext } from '@/features/movies/ui/categoryPage'



export const CategoryMovies: FC = () => {
  const { category } = useParams<{ category:CategoriesPath }>()
  const { page, onChangePage } = useOutletContext<CategoryContext>()
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