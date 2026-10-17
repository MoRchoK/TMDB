import type { FC } from 'react'
import { TitleMovieList } from '@/features/movies/ui/movieCard/headerMovieCard/titleMovieList/TitleMovieList.tsx'
import { MoviesLists } from '@/features/movies/ui/movieCard/moviesLists'
import s from './сategoryContent.module.css'
import type { CategoryContentType } from '@/features/movies/ui/categoryPage/categoryContent/categoryContentType.ts'
import { CategoryContentSkeleton } from '@/common/components/skeleton/CategoryContentSkeleton.tsx'
import { BasePagination } from '@/common/components/basePagination'


export const CategoryContent: FC<CategoryContentType> = ({
                                                           categoryTitle,
                                                           moviesData,
                                                           isLoading,
                                                           onChangePage,
                                                           totalPages,
                                                           page,
                                                           isFetching,
                                                         }) => {


  if (isLoading ) return <CategoryContentSkeleton />
  if (!moviesData?.length ) return <span>Movies is not found</span>


  return (
    <>
      <div className={s.categoryContent}>
        {categoryTitle && categoryTitle !== 'null' && <TitleMovieList title={categoryTitle} />}
        <MoviesLists moviesData={moviesData} />
      </div>
      <div className={s.paginationWrapper}>
        <BasePagination disabled={isFetching}
                        totalPages={totalPages || 1}
                        page={page || 1}
                        onChange={onChangePage}
                        maxPages={500} />
      </div>
    </>
  )
}