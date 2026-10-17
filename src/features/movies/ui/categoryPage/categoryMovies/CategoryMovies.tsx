import { type FC, useMemo } from 'react'
import { useOutletContext, useParams } from 'react-router'
import { CategoryContent } from '@/features/movies/ui/categoryPage/categoryContent'
import { useGetCategoryMoviesQuery } from '../../../api/movieListsApi.ts'
import { categoriesPath, type CategoriesPath, categoryMoviesByPath } from '@/common/constants'
import type { CategoryContext } from '@/features/movies/ui/categoryPage'
import { getCategoryMoviesData } from '@/common/utils/getCategoryMoviesData.ts'



export const CategoryMovies: FC = () => {
  const { category } = useParams<{ category: CategoriesPath }>()
  const { page, onChangePage } = useOutletContext<CategoryContext>()

  const path: CategoriesPath = category ?? categoriesPath.PopularMovies
  const categoryTitle = categoryMoviesByPath[path].title

  const { data, isLoading, isFetching } = useGetCategoryMoviesQuery({
    category: path,
    page,
  })

  const resultCategoryData = useMemo(
    () => getCategoryMoviesData(data?.results),
    [data?.results],
  )

  return (
    <CategoryContent
      onChangePage={onChangePage}
      totalPages={data?.total_pages}
      page={data?.page}
      isFetching={isFetching}
      isLoading={isLoading}
      moviesData={resultCategoryData}
      categoryTitle={categoryTitle}
    />
  )
}