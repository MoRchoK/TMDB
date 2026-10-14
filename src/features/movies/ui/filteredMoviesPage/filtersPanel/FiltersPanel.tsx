import { type FC } from 'react'
import s from './filtersPanel.module.css'
import { SortControl } from '@/common/components/sortControl'
import { sortMoviesParams } from '@/common/constants'
import { RatingRange } from '@/common/components/RatingRange'
import { FormTags } from '@/common/components/formTags'
import { BaseButton } from '@/common/components/button/baseButton'
import type { FiltersPanelType } from './filtersPanelType.ts'


export const FiltersPanel: FC<FiltersPanelType> = ({ratingRangeHandler,
                                                     resetFormHandler,
                                                     formTagsHandler,
                                                     sortValue,
                                                     activeGenresId,
                                                     genres,
                                                     minValueRating,
                                                     maxValueRating,
                                                     onChangeSort}) => {

  return(
    <div className={s.filtersPanel}>
      <span className={s.panelTitle}> Filters / Sort</span>
      <SortControl
        onChange={onChangeSort}
        value={sortValue}
        optionsData={sortMoviesParams} />
      <RatingRange onChange={ratingRangeHandler}
                   limit={10}
                   minValue={minValueRating}
                   maxValue={maxValueRating} />
      <FormTags genres={genres}
                formTagsHandler={formTagsHandler}
                activeGenresId={activeGenresId} />

      <div className={s.resetBtnWrapper} >
        <BaseButton title={'Reset filters'}
                    onClick={resetFormHandler}
                    accentBtn={true} />
      </div>
    </div>
  )
}