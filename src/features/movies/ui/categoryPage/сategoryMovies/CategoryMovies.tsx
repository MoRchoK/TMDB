import type { FC } from 'react'
import { useOutletContext, useParams } from 'react-router'
import { CategoryContent } from '@/features/movies/ui/categoryPage/categoryContent'
import { useGetCategoryMoviesQuery } from '../../../api/movieListsApi.ts'
import { categoriesPath, type CategoriesPath, categoryMoviesByPath } from '@/common/constants'
import type { CategoryContext } from '@/features/movies/ui/categoryPage'
import { getCategoryMoviesData } from '@/common/utils/getCategoryMoviesData.ts'



export const CategoryMovies: FC = () => {
  const { category } = useParams<{ category:CategoriesPath }>()
  const { page, onChangePage } = useOutletContext<CategoryContext>()
  const path:CategoriesPath   = category || categoriesPath.PopularMovies
  const categoryTitle: string = category? categoryMoviesByPath[path].title : 'Popular Movies'
  const { data, isLoading, isFetching } = useGetCategoryMoviesQuery({ category:path, page })
  const resultCategoryData = getCategoryMoviesData(data?.results)



  return (
    <CategoryContent
      onChangePage={onChangePage}
      totalPages={data?.total_pages}
      page={data?.page}
      isFetching={isFetching}
      isLoading={isLoading}
      moviesData={resultCategoryData}
      categoryTitle={categoryTitle }
    />
  )
}