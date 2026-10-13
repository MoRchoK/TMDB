import type { FC } from 'react'
import { TitleMovieList } from '@/features/movies/ui/movieCard/headerMovieCard/titleMovieList/TitleMovieList.tsx'
import { MoviesLists } from '@/features/movies/ui/movieCard/moviesLists'
import s from './сategoryContent.module.css'
import type { CategoryContentType } from '@/features/movies/ui/categoryPage/categoryContent/categoryContentType.ts'
import { CategoryContentSkeleton } from '@/common/components/skeleton/CategoryContentSkeleton.tsx'
import { BasePagination } from '@/common/components/basePagination'


export const CategoryContent: FC<CategoryContentType> = ({ categoryTitle, moviesData, isLoading, onChangePage, isFetching }) => {
  const isLoadingPage = !moviesData?.results || isLoading
  if (isLoadingPage) return <CategoryContentSkeleton />
  const totalPages =moviesData.total_pages
  const page =moviesData.page


  return (
    <>
      <div className={s.categoryContent}>
        <TitleMovieList title={categoryTitle} />
        <MoviesLists moviesData={moviesData.results} />
      </div>
      <div className={s.paginationWrapper}>
        <BasePagination disabled={isFetching}
                        totalPages={totalPages}
                        page={page}
                        onChange={onChangePage} maxPages={500} />
      </div>
    </>
  )
}