import { type FC, useState } from 'react'
import s from './filteredMoviesPage.module.css'
import { RatingRange } from '@/common/components/RatingRange'
import { SortControl } from '@/common/components/sortControl'
import { FormTags } from '@/common/components/formTags'
import { useGetDiscoverMoviesQuery } from '@/features/movies/api/movieListsApi.ts'
import { CategoryContent } from '@/features/movies/ui/categoryPage/categoryContent'
import { useChangePages } from '@/common/hooks/useChangePages.ts'
import { sortMoviesParams } from '@/common/constants'
import { SortMovie, type SortMovieType } from '@/features/movies/api'




export const FilteredMoviesPage: FC = () => {

  const [page, onChangePage] = useChangePages()
  const [sortBy, setSortBy] = useState<SortMovieType>(SortMovie.popularityDesc)

  const { data, isLoading } = useGetDiscoverMoviesQuery({page, sort_by: sortBy})

  const onTabsHandler = () =>{
    onChangePage(1)
  }

  if(!data?.results|| isLoading) return null

  return (
    <div className={s.FilteredMoviesPageContainer}>
      <div className={s.filtersPanel}>
        <span> Filters / Sort</span>
        <SortControl
          onChange={setSortBy}
          value={sortBy}
          optionsData={sortMoviesParams}/>
        <RatingRange />
        <FormTags />
      </div>
      <div className={s.contentWrapper}>
        <CategoryContent moviesData={data}
                         onChangePage={onTabsHandler}


        />

      </div>

    </div>
  )
}