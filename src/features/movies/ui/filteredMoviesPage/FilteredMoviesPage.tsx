import { type FC } from 'react'
import s from './filteredMoviesPage.module.css'
import { MoviesLists } from '@/features/movies/ui/movieCard/moviesLists'
import { RatingRange } from '@/common/components/RatingRange'
import { SortControl } from '@/common/components/sortControl'
import { FormTags } from '@/common/components/formTags'
import { BasePagination } from '@/common/components/basePagination'


const moviesData = Array(12).fill(null)


export const FilteredMoviesPage: FC = () => {


  return (
    <div className={s.FilteredMoviesPageContainer}>
      <div className={s.filtersPanel}>
        <span> Filters / Sort</span>
        <SortControl />
        <RatingRange />
        <FormTags />
      </div>
      <div className={s.contentWrapper}>
        <MoviesLists moviesData={moviesData} />
        <BasePagination />
      </div>

    </div>
  )
}